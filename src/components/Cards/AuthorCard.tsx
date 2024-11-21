import instaLogo from "../../assets/Client-First - icons/Negative (2).svg";
import linkedInLogo from "../../assets/Client-First - icons/Negative (3).svg";
import twitterLogo from "../../assets/Client-First - icons/Negative (4).svg";
import facebookLogo from "../../assets/Client-First - icons/Negative.svg";
type props = {
  image: string;
  name: string;
};
const AuthorCard: React.FC<props> = ({ image, name }) => {
  return (
    <div
      className="bg-card1 hover:bg-card3 transition-colors duration-300 ease-in-out flex flex-col justify-center items-center gap-4 py-4 px-6"
      aria-label={`author ${name}`}
    >
      <img src={image} alt="author image" className="rounded-full size-20" />
      <div className="font-heading text-secondary text-xl font-bold">
        {name}
      </div>
      <div>Lorem ipsum dolor sit amet </div>
      <div className="flex gap-2">
        <img
          src={facebookLogo}
          alt=" facebook image "
          aria-label="follow on facebook"
        ></img>
        <img
          src={twitterLogo}
          alt=" facebook image "
          aria-label="follow on facebook"
        ></img>
        <img
          src={instaLogo}
          alt=" facebook image "
          aria-label="follow on facebook"
        ></img>
        <img
          src={linkedInLogo}
          alt=" facebook image "
          aria-label="follow on facebook"
        ></img>
      </div>
    </div>
  );
};

export default AuthorCard;
