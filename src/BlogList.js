const Bloglist = ({blog,title,handleDelete}) => {




  return (
    <div className="blog-list">
        <h2>{title}</h2>
      {blog.map(({title,id,author}) => (
        <div className="preview" key={id}>
                  <h1>{title}</h1>
                  <p>written by {author}</p>

                  <button onClick={()=>handleDelete(id)}>delete blog</button>
                </div>
      ))};

    </div>
  );
};

export default Bloglist;
