import "./styles.css";
import axios from "axios";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

export default function App() {
  const [picList, setPicList] = React.useState([]);
  React.useEffect(() => {
  const getPictures = async () => {
    try {
    const endpoint = "./fotos.json";
    const response = await axios.get(endpoint)  
    setPicList(response.data.photos)
    } catch (error) {
      console.log(error)
    }
  }
  getPictures();
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
