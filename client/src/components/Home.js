import BlogList from "./BlogList";
import useFetch from "./useFetch";

export default function Home() {
  const {data, isDataReceive, error} = useFetch("/api");

  return (
    <div className="home">
      { error ? error : <BlogList blogs={data} isDataReceive={isDataReceive} title="All Blogs!" /> }
    </div>
  )
}