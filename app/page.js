import Image from "next/image";
import Welcome from "./components/Welcome";

export default function Home() {
  return (
    <main>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          {/* <Navbar /> */}
          <Welcome />
        </div>

        {/* <About /> */}

        {/* <WorkshopGreeting /> */}
        {/* <FinishedProjects /> */}
        {/* <InProgressProjects /> */}

        {/* <SkillsCertsGreeting /> */}
        {/* <SkillsCerts /> */}

        <div className="relative z-0">{/* <Contact /> */}</div>
      </div>
    </main>
  );
}
