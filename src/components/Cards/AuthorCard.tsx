type Props = {
  image: string;
  name: string;
};

const AuthorCard: React.FC<Props> = ({ image, name }) => {
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
          src="/assets/Client-First - icons/Negative.svg"
          alt="facebook image"
          aria-label="follow on facebook"
        />
        <img
          src="/assets/Client-First - icons/Negative (4).svg"
          alt="twitter image"
          aria-label="follow on twitter"
        />
        <img
          src="/assets/Client-First - icons/Negative (2).svg"
          alt="instagram image"
          aria-label="follow on instagram"
        />
        <img
          src="/assets/Client-First - icons/Negative (3).svg"
          alt="linkedin image"
          aria-label="follow on linkedin"
        />
      </div>
    </div>
  );
};

export default AuthorCard;
