"use client";

export default function CardStack(){
    const cards = Array.from({length: 3}, (_, i) => i + 1).map((value, index) => {
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
      <div className="cards" data-active="3" data-current="3">
        {cards}
      </div>
    );
}