import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Client-First - IMAGES/Logo.svg";
import close from "../../assets/Client-First - icons/icons8-close.svg";
import menu from "../../assets/Client-First - icons/icons8-menu.svg";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import Button from "../Buttons/Button";
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLElement | null>(null);

  useOutsideClick({
    ref: menuRef,
    handler: () => setIsOpen(false),
  });
  return (
    <header className="md:hidden flex gap-6 bg-secondary py-4 px-6 md:px-12 relative">
      <button
        aria-label="Open Navigation Menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={menu} alt="open-menu" className="w-6" />
      </button>
      <img src={logo} alt="Finsweet-logo"></img>
      <Button
        variant={"white"}
        aria-label="click to subscribe"
        className="ml-auto hidden sm:block"
      >
        Subscribe
      </Button>

      <nav
        id="mobile-menu"
        aria-label="Navigation Menu"
        ref={menuRef}
        className={`fixed z-[99] flex flex-col gap-6 items-center [320px] h-[100vh] bg-secondary top-0 left-0 px-8 py-8 shadow-black/60 shadow-md 
            transition-all duration-300 ease-in-out
            ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <Button
          variant={"outline"}
          aria-label="Close Navigation Menu"
          onClick={() => setIsOpen(!isOpen)}
          className="flex text-lg text-white rounded-full gap-2 hover:bg-secondary/90 hover:text-white/80 "
        >
          <div>Close Menu</div>
          <img src={close} alt="menu-close"></img>
        </Button>
        <Link
          to={"/"}
          aria-label="Navigate to Home page"
          className="text-white text-xl hover:text-white/80 mt-4 "
        >
          Home
        </Link>

        <Link
          to={"/blog"}
          aria-label="Navigate to Blog page"
          className="text-white text-xl hover:text-white/80"
        >
          Blog
        </Link>
        <Link
          to={"/about-us"}
          aria-label="Navigate to About Us page"
          className="text-white text-xl hover:text-white/80"
        >
          About Us
        </Link>
        <Link
          to={"/contact-us"}
          aria-label="Navigate to Contact Us page"
          className="text-white text-xl"
        >
          Contact Us
        </Link>
      </nav>
    </header>
  );
};

export default MobileMenu;
