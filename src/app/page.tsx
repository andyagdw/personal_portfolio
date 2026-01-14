// Components
import About from "./components/about/about";
import GetInTouch from "./components/get-in-touch/getInTouch";
import Hero from "./components/hero/hero";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <About />
      <GetInTouch />
    </>
  );
}
