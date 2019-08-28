import React from 'react'
import './../index.css';
import Board from './Board'
import {calculateWinner} from './Utility'

export default class Game extends React.Component {
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


  