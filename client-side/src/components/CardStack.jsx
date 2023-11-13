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

  useEffect(() => {
    setInterval(() => {
      setI((state) => state + 1);
      active = i % 3 + 1;
      cards.current.removeAttribute('data-current');
      
      setTimeout(() => {
        cards.current.setAttribute('data-current', active);
      }, 1000);
    }, 3000)
  }, []);

  return (
    <div className="cards" data-active={active} data-current={active} ref={cards}>
      {card_arr}
    </div>
  );
}