import CategoryItem from "../Cards/CategoryItem";

const CategorySection = () => {
  return (
    <section>
      <h1 className="text-center text-secondary font-bold text-2xl">
        Choose a Category
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        <CategoryItem
          icon="/assets/Client-First - icons/Icon-1.svg" // Reference image in public folder
          title="Business"
        ></CategoryItem>
        <CategoryItem
          icon="/assets/Client-First - icons/Icon (2).svg" // Reference image in public folder
          title="Startup"
        ></CategoryItem>
        <CategoryItem
          icon="/assets/Client-First - icons/Icon.svg" // Reference image in public folder
          title="Economy"
        ></CategoryItem>
        <CategoryItem
          icon="/assets/Client-First - icons/business-and-trade 1.svg" // Reference image in public folder
          title="Technology"
        ></CategoryItem>
      </div>
    </section>
  );
};

export default CategorySection;
