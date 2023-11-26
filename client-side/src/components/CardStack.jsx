"use client";

import { Component, createRef } from "react";
import Image from "next/image";

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
  const card_names = ['Home Rennovation', 'Project 2', 'Project 3'];

  const card_arr = card_names.map((value, index) => {
    return (
      <div className="card" key={index}>
        <div className="card-headers">
          <h2>{value}</h2>
          <button>View project</button>
        </div>
        <Image height={500} width={500} className="card-background" src={`/compressed/portrait-stocks (${index + 1}).jpg`} alt={`stock-image ${index + 1}`}/>
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