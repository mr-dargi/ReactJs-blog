import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { ReactComponent as Trashcan } from "./trashcan.svg";

export default function BlogDetails() {
  const { id } = useParams();
  const {data, isDataReceive, error} = useFetch("/api/" + id);
  const navigate = useNavigate();

  const handleClick = async (id) => {
    const result = await fetch(
                    `/remove/blog/${id}`,
                    {
                      method: "DELETE"
                    }
                  ).then(response => response.json())
    
    alert(result);
    navigate("/");
  }

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
        <div>
          <a class="delete" onClick={ () => handleClick(id) }>
            <Trashcan />
          </a>
        </div>
      </div>
    )
  }
}