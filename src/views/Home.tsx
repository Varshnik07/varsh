import GridFrame from "../components/GridFrame";
import GridDivider from "../components/GridDivider";
import HatchDivider from "../components/HatchDivider";
import DotGridPanel from "../components/DotGridPanel";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Books from "./Books";
import Favorites from "./Favorites";
import Writing from "./Writing";
import GithubActivity from "./GithubActivity";
import Footer from "./Footer";

export default function Home() {
  return (
    <GridFrame>
      <DotGridPanel />
      <Hero />
      <HatchDivider />
      <About />
      <GridDivider />
      <Skills />
      <GridDivider />
      <Experience />
      <GridDivider />
      <Projects />
      <GridDivider />
      <Books />
      <GridDivider />
      <Favorites />
      <GridDivider />
      <Writing />
      <GridDivider />
      <GithubActivity />
      <GridDivider />
      <Footer />
    </GridFrame>
  );
}
