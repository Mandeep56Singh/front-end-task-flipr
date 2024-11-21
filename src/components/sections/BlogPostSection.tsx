import BlogPost from "../BlogPost/BlogPost"
import blogiamge from '../../assets/Client-First - IMAGES/two-women-in-front-of-dry-erase-board-1181533-1.svg'
const BlogPostSection = () => {
  return (
    <div className="flex flex-col gap-4">
        <h1 className="text-3xl text-secondary font-bold">All Post</h1>
        <BlogPost image={blogiamge} title={"Start Up"} heading={"Design tips for designers that cover everything you need"}></BlogPost>
        <BlogPost image={blogiamge} title={"Start Up"} heading={"Design tips for designers that cover everything you need"}></BlogPost>
        <BlogPost image={blogiamge} title={"Start Up"} heading={"Design tips for designers that cover everything you need"}></BlogPost>
        <BlogPost image={blogiamge} title={"Start Up"} heading={"Design tips for designers that cover everything you need"}></BlogPost>
    </div>
  )
}

export default BlogPostSection