import { Link } from "react-router-dom";

const Bloglist = ({blog,title}) => {




  return (
    <div className="blog-list">
        <h2>{title}</h2>
      {blog.map(({title,id,author}) => (
        <div className="preview" key={id}>
          <Link to={`/blogs/${id}`}>
            <div>{id}</div>
                  <h1>{title}</h1>
                  <p>written by {author}</p>
          </Link>
                </div>
      ))};

    </div>
  );
};

export default Bloglist;
