import { Link } from "react-router-dom";

export default function BlogList(props) {
  const blogPosts = props.blogs.map(blog => {
    return (
      <div className="blog-preview" key={blog._id}>
        <Link to={`/blogs/${blog._id}`}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </Link>
      </div>
    )
  })

  return (
    <div className="blog-list">
      <h2>{props.title}</h2>
      { props.isDataReceive ? blogPosts : "Loading..."}
    </div>
  )
}