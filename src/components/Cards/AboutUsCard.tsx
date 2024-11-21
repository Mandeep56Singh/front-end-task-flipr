
import Button from "../Buttons/Button";
const AboutUsCard = () => {
  return (
    <section aria-label="about us" className="flex flex-col gap-2  flex-1">
      <h1 className="text-lg text-secondary uppercase">About us</h1>
      <h1 className="text-2xl text-secondary uppercase font-semibold ">
        We are a community of
      </h1>
      <h1 className="text-2xl text-secondary uppercase font-semibold ">
        content writers who share thier
      </h1>
      <h1 className="text-2xl text-secondary uppercase font-semibold ">
        learnings
      </h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas ab
        vel tenetur?
      </p>
      <Button variant={"textual"} className="self-start px-0">
        {` Read more >`}
      </Button>
    </section>
  );
};

export default AboutUsCard;
