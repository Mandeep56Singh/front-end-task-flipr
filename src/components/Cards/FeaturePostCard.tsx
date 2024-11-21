import featurePostImage from "../../assets/Client-First - IMAGES/white-concrete-building-1838640.svg";
import Button from "../Buttons/Button";
const FeaturePostCard = () => {
  return (
    <section className="p-4">
      <h1 className="text-secondary text-3xl font-bold">Feature Post</h1>
      <section
        aria-label="Feature post"
        className="border p-4 flex flex-col justify-center items-center gap-4 mt-4"
      >
        <img
          src={featurePostImage}
          alt="feature post "
          aria-label="feature post image"
          loading="lazy"
          className=""
        />
        <div className="flex gap-2 text-secondary  self-start ">
          By<div className="text-special">John Dee</div>| May 23,2022
        </div>
        <h1 className="text-secondary  text-xl md:text-2xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
          expedita
        </h1>
        <p className="text-secondary sm:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          repellat architecto ullam delectus aut repellendus
        </p>
        <Button className="max-w-[160px] self-start">Read more</Button>
      </section>
    </section>
  );
};

export default FeaturePostCard;
