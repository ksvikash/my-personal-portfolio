import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SelectedWork from "./components/SelectedWork";
import Contact from "./components/Contact";
import GlassFooter from "./components/GlassFooter";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <SelectedWork />
        <Contact />
      </main>
      <GlassFooter />
    </>
  );
}
