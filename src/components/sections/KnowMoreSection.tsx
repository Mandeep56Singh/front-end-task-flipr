import image1 from "../../assets/Client-First - IMAGES/ground-group-growth-hands-461049.svg";

const KnowMoreSection = () => {
  return (
    <section className="flex flex-col gap-8  justify-center items-center p-8">
      <div className="flex flex-col md:flex-row gap-8 ">
        <div className="flex flex-col gap-4 justify-center max-w-[620px]">
          <h1 className="text-2xl text-secondary font-bold">
            Our team of creatives
          </h1>
          <p className="font-bold text-lg text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            aperiam illum asperiores minima nisi dolores fugiat provident
            consequuntur nesciunt quas?
          </p>
        </div>
        <img
          src={image1}
          alt="blog image"
          className="size-[320px] md:size-[380px] mx-auto"
        />
      </div>
      <div className="flex flex-col md:flex-row-reverse gap-8 ">
        <div className="flex flex-col gap-4 justify-center max-w-[620px]">
          <h1 className="text-2xl text-secondary font-bold">
            Our team of creatives
          </h1>
          <p className="font-bold text-lg text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            aperiam illum asperiores minima nisi dolores fugiat provident
            consequuntur nesciunt quas?
          </p>
        </div>
        <img
          src={image1}
          alt="blog image"
          className="size-[320px] md:size-[380px] mx-auto"
        />
      </div>
     
    </section>
  );
};

export default KnowMoreSection;
