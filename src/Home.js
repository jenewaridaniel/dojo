import { useState } from "react";

const Home = () => {
    let[name,Setname] =useState('itachi') 
    let[person,setPerson]=useState('good')

    let Handler =()=>{
        Setname('obito')
        setPerson('Negs')
    }
    return (  
      
        <div className="home">
            <h1>Homepage</h1>
            <p>{name} is {person}</p>
            <button onClick={Handler}>click here</button>
        </div>
    );
}
 
export default Home;