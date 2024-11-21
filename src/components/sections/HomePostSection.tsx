import HomePostList from "../All Post list/HomePostList";
import FeaturePostCard from "../Cards/FeaturePostCard";

const HomePostSection = () => {
  return (
    <div className="md:flex ">
      <FeaturePostCard></FeaturePostCard>
      <HomePostList></HomePostList>
    </div>
  );
};

export default HomePostSection;
