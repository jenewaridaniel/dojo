
import Bloglist from "./BlogList";
import useFetch from "./UseFetch";


const Home = () => {
  const {data:blogs ,isLoading} = useFetch(' http://localhost:8000/blogs')

  // const handleDelete =(id) => {
  // const newBlogs = blogs.filter(blog =>blog.id !== id);
  // setBlogs(newBlogs)
  // }



  return (
    <div className="home">
      {isLoading && <div>Loading......</div>}
    {blogs && <Bloglist blog={blogs} title='All Blogs' />}
     {/* <button onClick={()=> setName('Denji')}>click again</button>
     <p>{name}</p> */}
    </div>
  );
};
export default Home;
