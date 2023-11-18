"use client";

import { Component, createRef } from "react";

export default class CardStack extends Component{
 constructor(props){
  super(props);
  this.state = {};
  this.activeIndex = createRef(1);
  
 }

 componentDidMount(){
  const cards = document.querySelector('.cards');

  if(cards !== null){
    let i = 0;
    this.interval = setInterval(() => {
      this.activeIndex['current'] = (i++ % 3) + 1;
  
      cards.setAttribute('data-active', this.activeIndex['current']);
      cards.removeAttribute('data-current');
  
      setTimeout(() => {
        cards.setAttribute('data-current', this.activeIndex['current']);
      }, 1000);
    }, 5000);
  }
 }

 render(){

  const card_arr = Array.from({length: 3}, (_, i) => i + 1).map((value, index) => {
    return (
      <div className="card" key={index}>
        <div className="card-headers">
          <h2>{value}</h2>
        </div>
        <div className="card-content">
          project {value}
        </div>
        <img className="card-background" src={`/compressed/portrait-stocks (${value}).jpg`} alt={`stock-image ${value}`}/>
      </div>
    );
  });

  return (
    <div className="cards" data-active="3" data-current="3" ref={this.cards}>
      {card_arr}
    </div>
  );
 }
}