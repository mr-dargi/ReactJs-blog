import { useState } from "react";

export default function Home() {
  const [blogs, setBlogs] = useState([
    {id: 1,title: "My new website", body: "lorem ipsum...", author: "Mohammad Reza Dargi"},
    {id: 2,title: "Welcom party", body: "lorem ipsum...", author: "Amir Mohammad"},
    {id: 3,title: "Web dev top tips", body: "lorem ipsum...", author: "Jadi"}
  ])

  const blogPost = blogs.map(blog => {
    return (
      <div className="blog-preview" key={blog.id}>
        <h2>{blog.title}</h2>
        <p>Written by {blog.author}</p>
      </div>
    )
  })


  return (
    <div className="home">
      {blogPost}
    </div>
  )
}