import "./styles.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import ApiProvider from "./context/ContextAPI";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <ApiProvider>
                <Home />
              </ApiProvider>
            }
          />
          <Route
            path="/favoritos"
            element={
              <ApiProvider>
                <Favoritos />
              </ApiProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
