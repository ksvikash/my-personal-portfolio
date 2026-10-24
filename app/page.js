import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import SelectedWork from "./components/SelectedWork";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import GlassFooter from "./components/GlassFooter";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <>
      <a href="#about" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <SelectedWork />
        <Publications />
        <Contact />
      </main>
      <GlassFooter />
    </>
  );
}
