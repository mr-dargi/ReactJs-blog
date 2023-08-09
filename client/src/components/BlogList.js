export default function BlogList(props) {
  const blogPost = props.blogs.map(blog => {
    return (
      <div className="blog-preview" key={blog.id}>
        <h2>{blog.title}</h2>
        <p>Written by {blog.author}</p>
      </div>
    )
  })

  return (
    <div className="blog-list">
      <h2>{props.title}</h2>
      {blogPost}
    </div>
  )
}