const PostListItem = () => {
  return (
    <div
      aria-label="post list item"
      className="flex flex-col items-center justify-center gap-1 hover:bg-card3 p-4"
    >
      <h6 className="flex gap-2 text-secondary self-start ">
        By<div className="text-special">John Dee</div>| May 23,2022
      </h6>
      <h1 className="text-secondary text-xl sm:text-2xl font-bold">
        8 Figma design systems that you can download for free today.
      </h1>
    </div>
  );
};

export default PostListItem;
