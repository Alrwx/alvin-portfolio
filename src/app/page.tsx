'use client'
import Navbar from "./components/navbar"
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Leadership from "./components/Leadership";
import Slideshow from "./components/Slideshow";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Slideshow />
      <Projects />
      <Experience />
      <Leadership />
    </>
  );
}
