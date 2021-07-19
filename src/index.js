import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


class Square extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <button className="square">XX</button>
    )
  }
}

class Board extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div>
        <h3>Next move: X</h3>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Board />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
