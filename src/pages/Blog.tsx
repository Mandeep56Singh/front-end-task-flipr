import HeroSectionBlog from "../components/Hero Sections/HeroSectionBlog";
import Navbar from "../components/Navbar/Navbar";
import BlogPostSection from "../components/sections/BlogPostSection";
import CategorySection from "../components/sections/CategorySection";
import FooterSection from "../components/sections/FooterSection";
import JionSection from "../components/sections/JionSection";

const Blog = () => {
  return (
    <>
      <Navbar></Navbar>
      <HeroSectionBlog></HeroSectionBlog>
      <div className="p-12 flex flex-col gap-20 mt-20">
        <BlogPostSection></BlogPostSection>
        <CategorySection></CategorySection>
        <JionSection></JionSection>
      </div>
      <FooterSection></FooterSection>
    </>
  );
};

export default Blog;
