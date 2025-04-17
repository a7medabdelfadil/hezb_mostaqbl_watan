import React from "react";
import AboutIntro from "~/_components/about/intro";
import AboutHero from "~/_components/about/hero";
import Footer from "~/_components/footer";
import VisionSection from "~/_components/about/vision";

function About() {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <VisionSection />
      <Footer />
    </>
  );
}

export default About;
