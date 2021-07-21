import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


const calculateWinner = (squares) => {
  console.log(squares)
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const isGameTied = (squares) => {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] === null) {
      return false;
    }
  }
  return true;
}

const Square = (props) => {
  return (
    <button className="square" onClick={props.onClick}>{props.value}</button>
  );
}

class Board extends React.Component {

  renderSquare(i) {
    return <Square value={this.props.squares[i]} onClick={() => this.props.handleClick(i)} />
  }

  render() {


    return (
      <div id="grid">
        {/* <div id="header">
          <h1 className="h1">{status}</h1>
        </div> */}
        {/* <div> */}
        {/* <div> */}
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        {/* </div> */}
        {/* <div> */}
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
        {/* </div> */}
        {/* <div> */}
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
        {/* </div> */}
        {/* </div> */}
      </div>
    )
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    }
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squaresCopy = current.squares.slice();
    if (calculateWinner(squaresCopy) || squaresCopy[i]) {
      return;
    }
    squaresCopy[i] = this.state.xIsNext ? 'X' : 'O';
    console.log(squaresCopy);
    this.setState({
      history: history.concat([{
        squares: squaresCopy,
      }]),
      stepNumber: this.state.stepNumber + 1,
      xIsNext: !this.state.xIsNext,
    })
  }

  reset() {
    this.setState({
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    })
  }

  jumpTo(i) {
    this.setState({
      stepNumber: i,
      xIsNext: i % 2 === 0 ? true : false,
    })
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    console.log(this.state.stepNumber)
    const winner = calculateWinner(current.squares);
    const isTied = isGameTied(current.squares);

    let status;
    if (winner) {
      status = "Winner " + winner;
    } else if (isTied) {
      status = "Game Tied";
    }
    else {
      status = "Next move: " + (this.state.xIsNext ? "X" : "O");
    }

    let moves = history.map((item, i) => {

      const desc = i === 0 ? "Go to start" : "Go to step" + i;

      return <li key={i}>
        <button className="step-btn" onClick={() => this.jumpTo(i)}>{desc}</button>

      </li>
    });

    return (
      <div>
        <div id="header">
          <div className="h1">{status}</div>
          <div className="side-h1">Moves</div>
        </div>
        <div id="container">
          <div id="board">
            <Board
              squares={current.squares}
              handleClick={(i) => this.handleClick(i)}
            />
          </div>
          <div id="side-bar">
            <ol>{moves}</ol>
          </div>
        </div>
        <div className="footer">
          <button className="btn" onClick={() => this.reset()} >Reset</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
