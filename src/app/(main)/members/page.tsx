import React from "react";
import Footer from "~/_components/footer";
import MembersHero from "~/_components/members/hero";
import MPsSection from "~/_components/members/MPsSection";
import SenateSection from "~/_components/members/SenateSection";

function Members() {
  return (
    <>
    <MembersHero />
    <MPsSection />
    <SenateSection />
     <Footer />
    </>
  );
}

export default Members;