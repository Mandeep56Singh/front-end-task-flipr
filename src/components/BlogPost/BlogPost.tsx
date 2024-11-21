type props = {
  image: string;
  title: string;
  heading: string;
};
const BlogPost: React.FC<props> = ({ image, title, heading }) => {
  return (
    <div className="flex gap-8 items-center flex-col-reverse mt-8 md:flex-row md:w-[70%]">
      <img src={image} alt={`blog post image`} className="" />
      <div className="flex  flex-col  gap-4 ">
        <div className="uppercase text-special text-lg font-bold">{title}</div>
        <h1 className="text-secondary  text-2xl font-bold">{heading}</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At consequatur temporibus vero sapiente ipsa est. Esse tempore consequatur perferendis non.</p>
      </div>
    </div>
  );
};

export default BlogPost;
