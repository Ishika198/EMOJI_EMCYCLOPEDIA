import React from "react";
import "./index.css";

function Card(props) {
  return (
    <div className="cards">
    <div className="card"> <div className="icon">{props.icon}</div>
    <p className="name"> {props.name}</p>
    <span> {props.details}</span>
    </div>
    </div>
  );
}

export default Card;