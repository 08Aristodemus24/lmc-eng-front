function Cards(){
    const cards = Array.from({length: 6}, (_, i) => i + 1).map((value, index) => {
      return (
        <div className="img-card" key={index}>
          <img src={`/compressed/portrait-stocks (${value}).jpg`} alt={`stock-image ${value}`}/>
        </div>
      );
    });
  
    return cards;
}