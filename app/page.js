import Image from "next/image";
import Welcome from "./components/Welcome";
import {
  WorkshopGreeting,
  FinishedProjects,
  InProgressProjects,
  SkillsCertsGreeting,
  SkillsCerts,
  Contact,
} from "./components";
import About from "./components/About";

export default function Home() {
  return (
    <main>
      <div className="relative z-0 bg-background-primary">
        <div className="bg-cover bg-no-repeat bg-center">
          {/* <Navbar /> */}
          <Welcome />
        </div>

        <About />

        <WorkshopGreeting />
        <FinishedProjects />
        <InProgressProjects />

        <SkillsCertsGreeting />
        <SkillsCerts />
        <Contact />

        <div className="relative z-0">{/* <Contact /> */}</div>
      </div>
    </main>
  );
}
