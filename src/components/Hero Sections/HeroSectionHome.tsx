import heroImage from "../../assets/Client-First - IMAGES/man-in-black-suit-wearing-eye-glasses-sitting-on-gray-sofa-using-macbook-3772622.svg";
import Button from "../Buttons/Button";
const HeroSectionHome = () => {
  return (
    <section
      className="bg-no-repeat bg-center bg-cover w-full md:h-[420px]  lg:h-[500px] px-8 py-12 bg-gradient-to-r from-black to-transparent flex flex-col gap-3 sm:gap-6"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.65) 70%, rgba(0, 0, 0, 0.45)) , url("${heroImage}")`,
      }}
    >
      <h6 className="uppercase text-card1 sm:text-lg">POStED ON STARTUP</h6>
      <h1 className="text-white text-xl sm:text-3xl lg:text-5xl font-bold leading-2  ">
        Step-by-step guide to choosing <br /> great font paris
      </h1>
      <h6 className="flex gap-2 text-white sm:text-lg">
        By<div className="text-primary">John Dee</div>| May 23,2022
      </h6>
      <p className="text-card1 text-sm sm:text-base  w-[70%] md:w-[60%]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad excepturi
        dolor Lorem ipsum, dolor sit amet consectetur 
      </p>
      <Button className="max-w-[160px]">Read more</Button>
    </section>
  );
};

export default HeroSectionHome;
