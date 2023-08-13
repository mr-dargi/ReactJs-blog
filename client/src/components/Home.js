import { useState, useEffect } from "react";
import BlogList from "./BlogList";

export default function Home() {
  const [blogs, setBlogs] = useState([])
  const [isDataReceive, setIsDataReceive] = useState(false);
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("/api")
      .then(res => {
        if(!res.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return res.json();
      })
      .then(data => {
        setIsDataReceive(true);
        setBlogs(data);
      })
      .catch(err => {
        setError(err.message);
      })
  }, [])

  return (
    <div className="home">
      { error ? error : <BlogList blogs={blogs} isDataReceive={isDataReceive} title="All Blogs!" /> }
    </div>
  )
}