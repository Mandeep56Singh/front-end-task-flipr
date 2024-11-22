import Button from "../Buttons/Button";

const HeroSectionBlog = () => {
  return (
    <section className="bg-no-repeat bg-center bg-cover w-full md:h-[420px] lg:h-[500px] px-8 py-12 bg-card1 flex flex-col md:flex-row items-center gap-14">
      <div className="flex flex-col gap-3 sm:gap-6">
        <h6 className="uppercase text-secondary sm:text-lg">
          POSTED ON STARTUP
        </h6>
        <h1 className="text-secondary text-xl sm:text-3xl lg:text-5xl font-bold leading-2">
          Step-by-step guide to choosing <br /> great font Paris
        </h1>
        <div className="flex gap-2 sm:text-lg">
          By <div className="text-special">John Dee</div>| May 23, 2022
        </div>
        <p className="text-sm sm:text-base w-[70%] md:w-[60%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad excepturi
          dolor Lorem ipsum, dolor sit amet consectetur
        </p>
        <Button className="max-w-[160px]">Read more</Button>
      </div>
      <img
        src="/assets/Client-First - IMAGES/man-in-white-dress-shirt-sitting-on-black-rolling-chair-while-facing-black-computer-set-and-smiling-840996.svg"
        alt="Hero section blog image"
        className="w-full h-auto" // Ensure the image fits well
      />
    </section>
  );
};

export default HeroSectionBlog;
