import startupLogo from "../../assets/Client-First - icons/Icon (2).svg";
import bussinessLogo from "../../assets/Client-First - icons/Icon-1.svg";
import economyLogo from "../../assets/Client-First - icons/Icon.svg";
import technologyLogo from "../../assets/Client-First - icons/business-and-trade 1.svg";
import CategoryItem from "../Cards/CategoryItem";
const CategorySection = () => {
  return (
    <section>
      <h1 className="text-center text-secondary font-bold text-2xl">
        Choose a Category
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        <CategoryItem icon={bussinessLogo} title="Bussiness"></CategoryItem>
        <CategoryItem icon={startupLogo} title="Startup"></CategoryItem>
        <CategoryItem icon={economyLogo} title="Economy"></CategoryItem>
        <CategoryItem icon={technologyLogo} title="Technology"></CategoryItem>
      </div>
    </section>
  );
};

export default CategorySection;
