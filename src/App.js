import React from "react";
import Emojis from "./Emojis";
import Card from "./Card";
const App = () => (
    <>
    <h1 className = "heading"> Emoji Encylopedia</h1>
    {Emojis.map ((val , index ) => {
        console.log(index);
    return (
            <Card 
            key = {val.id}
            icon={val.icon}
            name={val.name}
            details={val.details}
            />
    );
   })}
   </>
);

export default App;