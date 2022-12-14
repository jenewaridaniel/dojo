import { useParams } from "react-router-dom";
import useFetch from "./UseFetch";

const BlogDetails = () => {
    const {id}= useParams()
    const {data:blog,isLoading}= useFetch( `http://localhost:8000/blogs/` + id) ;
    return ( 
        <div className="blog-details">
            {isLoading&&<div>Loading.....</div>} 
            {blog &&(
             <article>
             <h2>{blog.title}</h2>
              <div>{blog.body}</div>
             </article>
           )}
        </div>
     );
}
 
export default BlogDetails;