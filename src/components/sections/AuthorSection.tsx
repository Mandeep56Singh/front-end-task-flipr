import profilePic from "../../assets/Client-First - IMAGES/content-unshaven-man-covering-eye-with-yellow-flower-5262459.svg";
import AuthorCard from "../Cards/AuthorCard";
const AuthorSection = () => {
  return (
    <>
      <h1 className="text-center text-secondary font-bold text-2xl">
        List of Authors
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 ">
        <AuthorCard image={profilePic} name={"Floyd Miles"}></AuthorCard>
        <AuthorCard image={profilePic} name={"Floyd Miles"}></AuthorCard>
        <AuthorCard image={profilePic} name={"Floyd Miles"}></AuthorCard>
        <AuthorCard image={profilePic} name={"Floyd Miles"}></AuthorCard>
      </div>
    </>
  );
};

export default AuthorSection;
