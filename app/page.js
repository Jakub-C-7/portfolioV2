import Welcome from "./components/Welcome";
import {
  WorkshopGreeting,
  FinishedProjects,
  SkillsCertsGreeting,
  Skills,
  Certs,
  Contact,
} from "./components";
import About from "./components/About";
import Footer from "./components/Footer";

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

        {/* <SkillsCertsGreeting /> */}
        <Skills />
        <Certs />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
