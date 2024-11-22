import HeroSectionHome from "../components/Hero Sections/HeroSectionHome";
import Navbar from "../components/Navbar/Navbar";
import AboutUsSection from "../components/sections/AboutUsSection";
import AuthorSection from "../components/sections/AuthorSection";
import CategorySection from "../components/sections/CategorySection";
import FeaturedBySection from "../components/sections/FeaturedBySection";
import FooterSection from "../components/sections/FooterSection";
import HomePostSection from "../components/sections/HomePostSection";
import JionSection from "../components/sections/JionSection";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <HeroSectionHome></HeroSectionHome>
      <div className="p-6 flex flex-col gap-20 mt-20">
        <HomePostSection></HomePostSection>
        <AboutUsSection></AboutUsSection>
        <CategorySection></CategorySection>
        <AuthorSection limit={4}></AuthorSection>
        <FeaturedBySection></FeaturedBySection>
        <JionSection></JionSection>
      </div>
      <FooterSection></FooterSection>
    </>
  );
};

export default Home;
