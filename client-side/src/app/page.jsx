import CardStack from "@/components/CardStack";
import Header from "@/components/Header";
import Section from "@/components/Section";
import Tiles from "@/components/Tiles";

import Image from "next/image";


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
            representing the next generation of the family&apos;s
            line in Engineering and Architecture.
        </p>
      </div>
      <div className="stack-container">
        <div className="landing-card">
          <Image width={1000} height={1000} src="/compressed/AIified stock photo (3).jpg" alt="stock-image"/>
        </div>
      </div>
    </Section>
  );
}

function ProjectsOverview(){

  return (
    <Section section-name={"proj-ov"}>
      <Header dest-page={"projects"} header={"See our projects"}/>
      <CardStack/>
    </Section>
  );
}

function ServicesOverview(){

  return (
    <Section section-name={"services-ov"}>
      <Header dest-page={"services"} header={"Services we offer"}/>
      <Tiles/>
    </Section>
  );
}

export default function Home(){
  return (
    <>
      <Landing/>
      <ProjectsOverview/>
      <ServicesOverview/>
    </>
  );
}