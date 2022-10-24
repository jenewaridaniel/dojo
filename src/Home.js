import { useState } from "react";
import BlogList from "./BlogList";
import Anime from "./anime";
import Person from "./Person";

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

  const [cars, setCars] = useState({ name: "lambo", engine: "v-16" });
  return (
    <div className="home">
      <BlogList games={blogs} />

      {animes.map((anime) => (
        <Anime anime={anime} />
      ))}

      {persons.map((person) => (
        <Person person={person} />
      ))}
    </div>
  );
};
export default Home;
