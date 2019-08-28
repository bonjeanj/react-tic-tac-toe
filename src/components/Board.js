import React from 'react'
import './../index.css';
import Square from './Square'

export default class Board extends React.Component {
    constructor(props){
      super(props); 
    }

    state = {
      index: this.props.index }

    renderSquare(i) {
      if(this.props.squares[i] == 'H') {  this.props.squares[i] = <img src={ require('./../resources/horse.png')} /> } 
      if(this.props.squares[i] == 'P') {  this.props.squares[i] = <img src={ require('./../resources/storm-trooper.jpg')} /> } 
      if(this.props.squares[i] == 'R') {  this.props.squares[i] = <img src={ require('./../resources/vader.jpeg')}/> } 
      if(this.props.squares[i] == 'X') {  this.props.squares[i] = <img src={ require('./../resources/creepy-yoda.jpg')}/> } 
      if(this.props.squares[i] == 'K') {  this.props.squares[i] = <img src={ require('./../resources/han.jpg')}  /> } 
      if(this.props.squares[i] == 'Q') {  this.props.squares[i] = <img src={ require('./../resources/chewy.jpg')} /> } 
      if(this.props.squares[i] == 'B') {  this.props.squares[i] = <img src={ require('./../resources/r2.jpg')} /> } 
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