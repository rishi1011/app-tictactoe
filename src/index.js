import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


const calculateWinner = (squares) => {
  // console.log(squares)
  const result = [];

  for (let i = 0; i < squares.length; i++) {
    for (let j = 0; j < squares[i].length; j++) {
      result.push(squares[i][j])
    }
  }
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
    if (result[a] && result[a] === result[b] && result[a] === result[c]) {
      return result[a];
    }
  }
  return null;
}

const isGameTied = (squares) => {
  for (let i = 0; i < squares.length; i++) {
    for (let j = 0; j < squares[i].length; j++) {
      if (squares[i][j] === null) {
        return false;
      }
    }
  }
  return true;
}

// const findLocation = (i) => {
//   if (i === 0 || i === 1 || i === 2) {
//     const location = [0, i - 0]
//     return location;
//   } else if (i === 3 || i === 4 || i === 5) {
//     const location = [1, i - 3]
//     return location;
//   } else {
//     const location = [2, i - 6];
//     return location;
//   }
// }

const differenceBetween = (i, j, history) => {
  // console.log(i, j, history);
  const squaresOne = history[i].squares;
  const squaresTwo = history[j].squares;
  console.log("hi", squaresOne, squaresTwo);
  for (let k = 0; k < squaresOne.length; k++) {
    for (let l = 0; l < squaresTwo.length; l++) {
      if (squaresOne[k][l] !== squaresTwo[k][l]) {
        return [k, l];
      }
    }
  }
  return [0, 0]
}

const Square = (props) => {
  return (
    <button className="square" onClick={props.onClick}>{props.value}</button>
  );
}

class Board extends React.Component {

  renderSquare(i, j) {
    return <Square value={this.props.squares[i][j]} onClick={() => this.props.handleClick(i, j)} />
  }

  render() {

    const res = []
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        res.push([i, j]);
      }
    }

    let result = res.map((item, i) => {
      return this.renderSquare(item[0], item[1]);
    })

    return (
      <div id="grid">{result}</div>
    )
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(3).fill(0).map(x => Array(3).fill(null)),
      }],
      stepNumber: 0,
      location: [0, 0],
      xIsNext: true,
    }
  }

  handleClick(i, j) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squaresCopy = Array(3).fill(0).map((x, idx) => {
      return current.squares[idx].slice()
    })
    if (calculateWinner(squaresCopy) || squaresCopy[i][j]) {
      return;
    }
    squaresCopy[i][j] = this.state.xIsNext ? 'X' : 'O';
    // const currentLocation = findLocation(i);
    this.setState({
      history: history.concat([{
        squares: squaresCopy,
      }]),
      stepNumber: this.state.stepNumber + 1,
      location: [i, j],
      xIsNext: !this.state.xIsNext,
    })
  }

  reset() {
    this.setState({
      history: [{
        squares: Array(3).fill(0).map(x => Array(3).fill(null)),
      }],
      stepNumber: 0,
      location: [0, 0],
      xIsNext: true,
    })
  }

  jumpTo(i) {
    const history = this.state.history.slice();
    if (i === 0) {
      const currentLocation = [0, 0]
      this.setState({
        stepNumber: i,
        location: currentLocation,
        xIsNext: i % 2 === 0 ? true : false,
      })
    } else {
      const currentLocation = differenceBetween(i, i - 1, history);
      // const currentLocation = findLocation(index);
      this.setState({
        stepNumber: i,
        location: currentLocation,
        xIsNext: i % 2 === 0 ? true : false,
      })
    }
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
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

      const desc = i === 0 ? "Go to start" : "Go to step " + i;

      return <li key={i}>
        <button className="step-btn" onClick={() => this.jumpTo(i)}>{desc}</button>

      </li>
    });

    const location = this.state.location;

    return (
      <div id="main-container">
        <div id="content">
          <div id="container1">
            <div id="header">
              <div>
                <div className="h1">{status}</div>
              </div>
            </div>
            <div id="location">{`[${location[0]}] [${location[1]}]`}
            </div>
            <div id="board">
              <Board
                squares={current.squares}
                handleClick={(i, j) => this.handleClick(i, j)}
              />
            </div>
          </div>
          <div id="container2">
            <div className="side-h1">Moves</div>
            <div id="side-bar">
              <ol>{moves}</ol>
            </div>
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
