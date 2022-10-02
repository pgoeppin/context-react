import "../assets/css/galeria.css";
import Heart from "./Heart";
import React from "react";
import { ContextApi } from "../context/ContextAPI";

export default function Home() {
  const { picList, setPicList, likePhoto } = React.useContext(ContextApi);

  return (
    <div className="galeria grid-columns-5 p-3">
      {picList.map((element) => (
        <div
          className="foto"
          key={element.id}
          style={{ backgroundImage: `url(${element.src.landscape})` }}
          onClick={() => likePhoto(element.id, picList, setPicList)}
        >
          <Heart filled={element.liked} />
          <p>{element.alt}</p>
        </div>
      ))}
    </div>
  );
}
