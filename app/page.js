import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import SelectedWork from "./components/SelectedWork";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import GlassFooter from "./components/GlassFooter";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <SelectedWork />
        <Publications />
        <Contact />
      </main>
      <GlassFooter />
    </>
  );
}
