import AuthorCard from "../Cards/AuthorCard";

type Props = {
  limit: number;
};

const AuthorSection: React.FC<Props> = ({ limit }) => {
  return (
    <>
      <h1 className="text-center text-secondary font-bold text-2xl">
        List of Authors
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from(new Array(limit)).map((_, index) => (
          <AuthorCard
            image="/assets/Client-First - IMAGES/content-unshaven-man-covering-eye-with-yellow-flower-5262459.svg"
            name={"Floyd Miles"}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default AuthorSection;
