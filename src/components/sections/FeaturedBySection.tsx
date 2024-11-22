import Button from "../Buttons/Button";

const FeaturedBySection = () => {
  return (
    <section
      className="bg-card3 flex flex-col gap-14 md:flex-row p-10"
      aria-label="featured by companies"
    >
      <div className="flex flex-col gap-2 flex-1">
        <h1 className="text-secondary uppercase text-lg font-semibold">
          Testimonials
        </h1>
        <h1 className="text-secondary font-bold text-2xl">
          What People say about our blog
        </h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="h-[200px] border- border-2 hidden md:block" />
      <hr className="border- border-2 md:hidden" />
      <div className="flex flex-col gap-8 flex-1">
        <p className="text-secondary font-semibold text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
          incidunt error minus, harum culpa et. Porro atque aut itaque, nisi
          laudantium non harum. Dignissimos.
        </p>
        <div className="flex justify-between">
          <div className="flex gap-2">
            {/* Referencing image from public folder */}
            <img
              src="/assets/Client-First - IMAGES/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses-7562313 (2).svg"
              alt="author pic"
              className="size-14"
            />
            <div>
              <div className="text-secondary font-semibold">Jonathan</div>
              <div className="text-sm">New York, USA</div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button size={"icon"} className="p-2 bg-card2 size-10">
              {"<-"}
            </Button>
            <Button size={"icon"} className="p-2 bg-card2 size-10">
              {"->"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBySection;
