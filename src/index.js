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
  constructor(props) {
    super(props);
  }


  renderSquare(i) {
    return <Square value={this.props.squares[i]} onClick={() => this.props.handleClick(i)} />
  }

  render() {


    return (
      <div>
        {/* <div id="header">
          <h1 className="h1">{status}</h1>
        </div> */}
        {/* <div> */}
        <div>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        {/* </div> */}
      </div>
    )
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    }
  }

  handleClick(i) {
    const squaresCopy = this.state.squares;
    if (calculateWinner(squaresCopy) || squaresCopy[i]) {
      return;
    }
    squaresCopy[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squaresCopy,
      xIsNext: !this.state.xIsNext,
    })
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    const isTied = isGameTied(this.state.squares);

    let status;
    if (winner) {
      status = "Winner " + winner;
    } else if (isTied) {
      status = "Game Tied";
    }
    else {
      status = "Next move: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div>
        <div>
          <div className="h1">{status}</div>
        </div>
        <div id="board">
          <Board
            squares={this.state.squares}
            handleClick={(i) => this.handleClick(i)}
          />
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
