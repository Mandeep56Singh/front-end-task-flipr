import HeroSectionAboutUs from "../components/Hero Sections/HeroSectionAboutUs";
import Navbar from "../components/Navbar/Navbar";

import AuthorSection from "../components/sections/AuthorSection";
import FooterSection from "../components/sections/FooterSection";
import JionSection from "../components/sections/JionSection";
import KnowMoreSection from "../components/sections/KnowMoreSection";

const About = () => {
  return (
    <>
      <Navbar></Navbar>

      {/* <HeroSectionAboutUs></HeroSectionAboutUs> */}
      <div className="p-6 flex flex-col gap-20 mt-20">
        <KnowMoreSection></KnowMoreSection>
        <AuthorSection limit={8}></AuthorSection>
      <JionSection></JionSection>
      </div>
      <FooterSection></FooterSection>
    </>
  );
};

export default About;
