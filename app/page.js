import Welcome from "./components/Welcome";
import {
  WorkshopGreeting,
  FinishedProjects,
  InProgressProjects,
  SkillsCertsGreeting,
  Skills,
  Certs,
  Contact,
} from "./components";
import About from "./components/About";

export default function Home() {
  return (
    <main>
      <div className="relative z-0 bg-background-primary">
        <div className="bg-cover bg-no-repeat bg-center">
          <Welcome />
        </div>
        <About />

        <WorkshopGreeting />

        <FinishedProjects />
        <InProgressProjects />

        <SkillsCertsGreeting />
        <Skills />
        <Certs />
        <Contact />
      </div>
    </main>
  );
}
