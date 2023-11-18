import CardStack from "@/components/CardStack";
import Section from "@/components/Section";

function Landing(){
  return (
    <Section section-name={"landing"}>
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
    </Section>
  );
}

function ProjectsOverview(){
  return (
    <Section section-name={"proj-ov"}>
      <div className="header-container">
        <h1>See our projects</h1>
        <button>View more</button>
      </div>
      <CardStack/>
    </Section>
  );
}

export default function Home(){
  return (
    <>
      <Landing/>
      <ProjectsOverview/>
    </>
  );
}