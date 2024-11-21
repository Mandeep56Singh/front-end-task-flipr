import HeroSectionHome from "../components/Hero Sections/HeroSectionHome";
import Navbar from "../components/Navbar/Navbar";
import HomePostSection from "../components/sections/HomePostSection";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <HeroSectionHome></HeroSectionHome>
      <div className="p-6">
        <HomePostSection></HomePostSection>
        
      </div>
    </>
  );
};

export default Home;
