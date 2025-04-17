import React from "react";
import Footer from "~/_components/footer";
import CentralCommittees from "~/_components/structure/GeneralCommittees";
import StructureHero from "~/_components/structure/hero";
import StructureMain from "~/_components/structure/main";
import MainCommittees from "~/_components/structure/MainCommittees";
import RegionalStructure from "~/_components/structure/RegionalStructure";

function HomePage() {
  return (
    <>
        <StructureHero />
        <StructureMain />
        <MainCommittees />
        <CentralCommittees />
        <RegionalStructure />
        <Footer />
    </>
  );
}

export default HomePage;