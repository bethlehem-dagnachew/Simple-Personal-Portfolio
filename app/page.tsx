import MotionProvider from "@/components/MotionProvider";
import Navbar from "@/components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <MotionProvider>
      <Navbar />
      <main className="min-h-screen bg-gray-100">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </MotionProvider>
  );
}
