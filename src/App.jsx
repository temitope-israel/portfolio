import { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="w-full flex flex-col py-2 bg-[#0f0f0f] auto scroll-smooth">
        <Header />
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="about-me">
          <AboutMe />
        </section>
        <section>
          <ContactMe />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default App;
