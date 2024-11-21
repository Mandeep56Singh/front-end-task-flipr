import { Link } from "react-router-dom";
import PostListItem from "./PostListItem";

const HomePostList = () => {
  return (
    <section className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-secondary text-3xl font-bold" aria-label="">
          All Posts
        </h1>
        <Link
          to="/view-all"
          aria-label="view all post"
          className="text-special capitalize"
        >
          View All
        </Link>
      </div>
      <section aria-label="All post section" className="mt-4">
        {Array.from(new Array(4)).map((_, index) => (
          <PostListItem key={index}></PostListItem>
        ))}
      </section>
    </section>
  );
};

export default HomePostList;
