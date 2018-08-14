import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
        
      </button>
    );
  }
  
  class Board extends React.Component {
    constructor(props){
      super(props); 
    }

    state = {
      index: this.props.index }

    renderSquare(i) {
      if(this.props.squares[i] == 'H') {  this.props.squares[i] = <img src={ require('./resources/horse.png')} /> } 
      if(this.props.squares[i] == 'P') {  this.props.squares[i] = <img src={ require('./resources/storm-trooper.jpg')} /> } 
      if(this.props.squares[i] == 'R') {  this.props.squares[i] = <img src={ require('./resources/vader.jpeg')}/> } 
      if(this.props.squares[i] == 'X') {  this.props.squares[i] = <img src={ require('./resources/creepy-yoda.jpg')}/> } 
      if(this.props.squares[i] == 'K') {  this.props.squares[i] = <img src={ require('./resources/han.jpg')}  /> } 
      if(this.props.squares[i] == 'Q') {  this.props.squares[i] = <img src={ require('./resources/chewy.jpg')} /> } 
      if(this.props.squares[i] == 'B') {  this.props.squares[i] = <img src={ require('./resources/r2.jpg')} /> } 
      return (
         <Square 
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
        />

      );
    } 
  
    render() {
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            {this.renderSquare(6)}
            {this.renderSquare(7)}
          </div>
          <div className="board-row">
            {this.renderSquare(8)}
            {this.renderSquare(9)}
            {this.renderSquare(10)}
            {this.renderSquare(11)}
            {this.renderSquare(12)}
            {this.renderSquare(13)}
            {this.renderSquare(14)}
            {this.renderSquare(15)}
          </div>
          <div className="board-row">
          {this.renderSquare(16)}
            {this.renderSquare(17)}
            {this.renderSquare(18)}
            {this.renderSquare(19)}
            {this.renderSquare(29)}
            {this.renderSquare(21)}
            {this.renderSquare(22)}
            {this.renderSquare(23)}
          </div>
          <div className="board-row">
          {this.renderSquare(24)}
            {this.renderSquare(25)}
            {this.renderSquare(26)}
            {this.renderSquare(27)}
            {this.renderSquare(28)}
            {this.renderSquare(29)}
            {this.renderSquare(30)}
            {this.renderSquare(31)}
          </div>
          <div className="board-row">
          {this.renderSquare(32)}
            {this.renderSquare(33)}
            {this.renderSquare(34)}
            {this.renderSquare(35)}
            {this.renderSquare(36)}
            {this.renderSquare(37)}
            {this.renderSquare(38)}
            {this.renderSquare(39)}
          </div>
          <div className="board-row">
          {this.renderSquare(40)}
            {this.renderSquare(41)}
            {this.renderSquare(42)}
            {this.renderSquare(43)}
            {this.renderSquare(44)}
            {this.renderSquare(45)}
            {this.renderSquare(46)}
            {this.renderSquare(47)}
          </div>
          <div className="board-row">
          {this.renderSquare(48)}
            {this.renderSquare(49)}
            {this.renderSquare(50)}
            {this.renderSquare(51)}
            {this.renderSquare(52)}
            {this.renderSquare(53)}
            {this.renderSquare(54)}
            {this.renderSquare(55)}
          </div>
          <div className="board-row">
          {this.renderSquare(56)}
            {this.renderSquare(57)}
            {this.renderSquare(58)}
            {this.renderSquare(59)}
            {this.renderSquare(60)}
            {this.renderSquare(61)}
            {this.renderSquare(62)}
            {this.renderSquare(63)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    constructor(props) {
      super(props);
      const array = Array(32).fill(null); 
      const backrow = ['R', 'H', 'B', 'K', 'Q', 'B', 'H', 'R' ]
      const pawnRow = ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P' ]
      let temp = backrow.concat(pawnRow); 
      temp = temp.concat(array); 
      temp = temp.concat(pawnRow); 
      const initalChessBoard = temp.concat(backrow); 
      this.state = {
        history: [
          {
            squares: initalChessBoard
          }
        ],
        stepNumber: 0,
        xIsNext: true,
        previous: null,
        previousIndex: -1
      };
    }
  
    handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      console.log("Previous"); 
      console.log(this.previous); 
      if(this.previous == null) 
      { 
        console.log("CURRENT INDEX"); 
        console.log(i); 
        this.previousIndex = i;
        this.previous = current.squares[i];
        return; 
      }
      console.log("PREVIOUS INDEX"); 
      console.log(this.previousIndex); 
      console.log("BEFORE"); 
      console.log(current); 
      current.squares[this.previousIndex] = null; 
      current.squares[i] = this.previous; 
      console.log(current.squares[i]); 
      console.log("After"); 
      console.log(current); 
      this.previous = null; 
      this.previousIndex = null; 
      
      const squares = current.squares.slice();
      // Calculate winner needs to be updated for Chess winner.
      // if (calculateWinner(squares) || squares[i]) {
      //   return;
      // }
      // squares[i] = this.state.xIsNext ? "X" : "O";
      this.setState({
        history: history.concat([
          {
            squares: squares
          }
        ]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext
      });
    }
  
    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0
      });
    }
  
    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);
  
      const moves = history.map((step, move) => {
        const desc = move ?
          'Go to move #' + move :
          'Go to game start';
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        );
      });
  
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
      }
  
      return (
        <div className="game"> 

          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={i => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(<Game />, document.getElementById("root"));
  
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2, 3, 4, 5, 6, 7, 8],
      [9, 10, 11, 12, 13, 14, 15, 16],
      [17, 18, 19, 20, 21, 22, 23, 24],
      [25, 26, 27, 28, 29, 30, 31, 32],
      [33, 34, 35, 36, 37, 38, 39, 40],
      [41, 42, 43, 44, 45, 46, 47, 48],
      [49, 50, 51, 52, 53, 54, 55, 56],
      [57, 58, 59, 60, 61, 62, 63, 64]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  