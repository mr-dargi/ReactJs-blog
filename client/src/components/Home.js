import { useState, useEffect } from "react";
import BlogList from "./BlogList";

export default function Home() {
  const [blogs, setBlogs] = useState([])
  const [isDataReceive, setIsDataReceive] = useState(false);

  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(data => {
        setIsDataReceive(true);
        setBlogs(data);
      })
  }, [])

  return (
    <div className="home">
      <BlogList blogs={blogs} isDataReceive={isDataReceive} title="All Blogs!" />
    </div>
  )
}