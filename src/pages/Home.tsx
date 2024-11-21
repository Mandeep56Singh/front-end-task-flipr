import HeroSectionHome from "../components/Hero Sections/HeroSectionHome";
import Navbar from "../components/Navbar/Navbar";
import AboutUsSection from "../components/sections/AboutUsSection";
import HomePostSection from "../components/sections/HomePostSection";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <HeroSectionHome></HeroSectionHome>
      <div className="p-6 flex flex-col gap-8 mt-8">
        <HomePostSection></HomePostSection>
         <AboutUsSection></AboutUsSection>
      </div>
    </>
  );
};

export default Home;
