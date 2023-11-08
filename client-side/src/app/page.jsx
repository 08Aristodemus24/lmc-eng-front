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

export default function Home(){

  return (
    <section id="landing-section">
      <div className="landing-content">
        <div className="slogan-container">
          <h1>  
              We innovate. We optimize.
          </h1>
          <p>
              These are the driving forces behind LMC as your
              engineering front for planning, designing, and
              ensuring sustainable green city living.
          </p>
          <p>
              Founded with the passion of its founder and
              inspired by years of engineering practice, LMC
              Engineering Front (LMC-EF) carries on the vision,
              representing the next generation of the family's
              line in Engineering and Architecture.
          </p>
        </div>
        <div className="stack-container">
          <div className="landing-card">
            <img src="/compressed/AIified stock photo (3).jpg" alt="stock-image"/>
          </div>
        </div>
      </div>
    </section>
  );
}
