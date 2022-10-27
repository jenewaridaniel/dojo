import { useState,useEffect } from "react";
import Bloglist from "./BlogList";


const Home = () => {


  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {title: "Web dev top tips", body: "lorem ipsum...",author: "mario", id: 3,}
  ]);
  
  const handleDelete =(id) => {
  const newBlogs = blogs.filter(blog =>blog.id !== id);
  setBlogs(newBlogs)
  }

useEffect(() => {
  console.log('useeffect works')
},[name])

  return (
    <div className="home">
     <Bloglist blog={blogs} title='All Blogs' handleDelete={handleDelete}/>
     <button onClick={()=> setName('Denji')}>click again</button>
     <p>{name}</p>
    </div>
  );
};
export default Home;
