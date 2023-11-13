"use client";

import { Component, createRef } from "react";

export default class CardStack extends Component{
 constructor(props){
  super(props);
  this.state = {
    time: Date.now()
  };
  this.idx = createRef(0);
  this.activeIndex = createRef(3);
  this.cards = createRef();
 }

 componentDidMount(){
  this.interval = setInterval(() => {
    this.idx['current'] = this.idx['current'] + 1;
    this.activeIndex['current'] = this.idx['current'] % 3 + 1;

    this.cards.current.setAttribute('data-active', this.activeIndex['current']);
    this.cards.current.removeAttribute('data-current');

    setTimeout(() => {
      this.cards.current.setAttribute('data-current', this.activeIndex['current']);
    }, 1000);
  }, 5000);
 }

 render(){

  const card_arr = Array.from({length: 3}, (_, i) => i + 1).map((value, index) => {
    return (
      <div className="card" key={index}>
        <div className="card-headers">
          <h2>{value}</h2>
        </div>
        <div className="card-content">
          <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
          </ul>
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