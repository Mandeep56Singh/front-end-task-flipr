import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <>
      <MobileMenu />

      <header className="hidden md:flex bg-secondary py-4 px-12 gap-2 justify-between items-center">
        <Link to="/" aria-label="navigate to home">
          <img
            src="/assets/Client-First - IMAGES/Logo.svg" // Path from public folder
            alt="Finsweet-logo"
          />
        </Link>
        <nav className="flex items-center lg:gap-8 gap-4">
          <Link
            to={"/"}
            aria-label="Navigate to Home page"
            className="text-white hover:text-white/80"
          >
            Home
          </Link>

          <Link
            to={"/blog"}
            aria-label="Navigate to Blog page"
            className="text-white hover:text-white/80"
          >
            Blog
          </Link>
          <Link
            to={"/about-us"}
            aria-label="Navigate to About Us page"
            className="text-white hover:text-white/80"
          >
            About Us
          </Link>
          <Link
            to={"/contact-us"}
            aria-label="Navigate to Contact Us page"
            className="text-white"
          >
            Contact Us
          </Link>
          <Button variant={"white"} aria-label="click to subscribe">
            Subscribe
          </Button>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
