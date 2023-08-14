import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

export default function BlogDetails() {
  const { id } = useParams();
  const {data, isDataReceive, error} = useFetch("/api/" + id);

  if(error) {
    return  (
      <p>{error}</p>
    )
  } else if(!isDataReceive) {
    return (
      <p>Loding...</p>
    )
  } else {
    return (
      <div className="blog-details">
        <article>
          <h2>{data.title}</h2>
          <p>Written by { data.author }</p>
          <div>{ data.body }</div>
        </article>
      </div>
    )
  }
}