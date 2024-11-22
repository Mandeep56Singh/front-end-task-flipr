import BlogPost from "../BlogPost/BlogPost";

const BlogPostSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl text-secondary font-bold">All Post</h1>
      <BlogPost
        image="/assets/Client-First - IMAGES/two-women-in-front-of-dry-erase-board-1181533-1.svg"
        title={"Start Up"}
        heading={"Design tips for designers that cover everything you need"}
      />
      <BlogPost
        image="/assets/Client-First - IMAGES/two-women-in-front-of-dry-erase-board-1181533-1.svg"
        title={"Start Up"}
        heading={"Design tips for designers that cover everything you need"}
      />
      <BlogPost
        image="/assets/Client-First - IMAGES/two-women-in-front-of-dry-erase-board-1181533-1.svg"
        title={"Start Up"}
        heading={"Design tips for designers that cover everything you need"}
      />
      <BlogPost
        image="/assets/Client-First - IMAGES/two-women-in-front-of-dry-erase-board-1181533-1.svg"
        title={"Start Up"}
        heading={"Design tips for designers that cover everything you need"}
      />
    </div>
  );
};

export default BlogPostSection;
