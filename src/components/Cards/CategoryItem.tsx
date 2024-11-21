type props = {
  title: string;
  icon: string;
};
const CategoryItem: React.FC<props> = ({ title, icon }) => {
  return (
    <div
      aria-label={`${title} category Item`}
      className="flex sm:flex-col gap-2 p-4 border-2 border-gray-200  hover:bg-primary items-center transition-all duration-300 ease-in-out rounded-lg"
    >
      <div className="bg-card3 p-2 size-16 flex justify-center items-center rounded-2xl ">
        <img src={icon} alt={`${title} image`} className="" />
      </div>
      <h1 className="text-secondary text-2xl font-bold  ">{title}</h1>
      <p className="hidden sm:block">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default CategoryItem;
