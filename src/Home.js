import { useState } from "react";
import BlogList from "./BlogList";
import Anime from "./anime";
import Person from "./Person";
import School from "./school";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  const [animes, setAnimes] = useState([
    { name: "Daniel jenewari", character: "obito" },
    { name: "Daniel jenewari", character: "obito" },
    { name: "Daniel jenewari", character: "obito" },
    { name: "Daniel jenewari", character: "obito" },
    { name: "Daniel jenewari", character: "obito" },
  ]);

  const [persons, setPersons] = useState([
    { name: "Ekeke", occupation: "Forex Trader" },
    { name: "fan", occupation: "Rotating air" },
    { name: "Boko Haram", occupation: "Bomb country" },
  ]);

  const [name, setName] =useState([
    {name:'ris'},
    {name:'ris'},
    {name:'ris'}
  ])
  return (
    <div className="home">
      <BlogList games={blogs} />

      {animes.map((anime) => (
        <Anime anime={anime} />
      ))}

      {persons.map((person) => (
        <Person person={person} />
      ))}

      {name.map((title)=>(
        <School  truck={title}/>
      ))}
    </div>
  );
};
export default Home;
