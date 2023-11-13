"use client";

import { useEffect, useRef, useState } from "react";



export default function CardStack(){
  let [i, setI] = useState(0);
  let active = 3;

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

  const cards = useRef();

  return (
    <div className="cards" data-active="3" data-current="3" ref={cards}>
      {card_arr}
    </div>
  );
}