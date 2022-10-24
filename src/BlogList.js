const BlogList = ({games}) => {
    return ( 
        <div className="Blog-List">
        {games.map((blog) =>(
            <div className="preview" key={blog.id}>
                <h1>{blog.title}</h1>
                <p>written by {blog.author}</p>
            </div>
        ))}
        </div>
     );
}
 
export default BlogList;