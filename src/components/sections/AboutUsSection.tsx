import AboutUsCard from "../Cards/AboutUsCard";
import OurMissionCard from "../Cards/OurMissionCard";

const AboutUsSection = () => {
  return (
    <>
      <div className="flex   h-[20px] w-3/4 ml-auto">
        <div className="bg-primary h-4 w-7/12  "></div>
        <div className="bg-special h-4 w-5/12  "></div>
      </div>
      <section className="bg-card1  flex flex-col md:flex-row  -mt-9 px-12 py-20 justify-between gap-12">
        <AboutUsCard></AboutUsCard>
        <OurMissionCard></OurMissionCard>
      </section>
    </>
  );
};

export default AboutUsSection;
