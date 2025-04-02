import React, { useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LanguageToggle from "./components/LanguageToggle";


import { initScrollReveal } from "./utils/scrollReveal";
import initTiltAnimation from "./utils/tiltAnimation";
import { defaultProps, targetElements } from "./utils/scrollRevealConfig";

const App = () => {
  useEffect(() => {
    initScrollReveal(targetElements, defaultProps);
    initTiltAnimation();
  }, []);

  return (
    <>
      <LanguageToggle />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
