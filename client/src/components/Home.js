import { useState } from "react";
import BlogList from "./BlogList";

export default function Home() {
  const [blogs, setBlogs] = useState([
    {id: 1,title: "My new website", body: "lorem ipsum...", author: "Mohammad Reza Dargi"},
    {id: 2,title: "Welcom party", body: "lorem ipsum...", author: "Amir Mohammad"},
    {id: 3,title: "Web dev top tips", body: "lorem ipsum...", author: "Jadi"}
  ])


  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" />
    </div>
  )
}