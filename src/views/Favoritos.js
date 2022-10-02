import { ContextApi } from "../context/ContextAPI"
import React from "react"

export default function Favoritos() {
  const { favPicList } = React.useContext(ContextApi)
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {favPicList.map((element) => (
                  <div
                  className="foto"
                  key={element.id}
                  style={{ backgroundImage: `url(${element.src.landscape})` }}
                >
                  </div>
        ))}
      </div>
    </div>
  );
}
