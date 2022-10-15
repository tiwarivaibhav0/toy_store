import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";
import Nav from "./nav";
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { data, Latest } from "./data";
import MediaControlCard from "./card";
import Footer from "./footer";
import { Carousel, Thumbs } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Slider } from "./slider";
import { Offer } from "./offer";
import { SuperHero } from "./superhero";
import { Dolls } from "./dolls";
import { Educational } from "./educational";
import { Models } from "./models";
import { TableFooter } from "@mui/material";
import Checkout from "./Checkout";
export const CartContext = React.createContext();
function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [state, setState] = useState(false);
  const [data, setData] = useState(Latest);
  const [searchText, setsearchText] = useState("");

  return (
    <div className="App">
      <div className="container">
        <CartContext.Provider
          value={[
            cart,
            setCart,
            total,
            setTotal,
            state,
            setState,
            data,
            setData,
            searchText,
            setsearchText,
          ]}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/superheros" element={<SuperHero />} />
            <Route path="/dolls" element={<Dolls />} />

            <Route path="/educational" element={<Educational />} />

            <Route path="/models" element={<Models />} />
            <Route path="/checkout" element={<Checkout />} />

          </Routes>
        </CartContext.Provider>
      </div>
    </div>
  );
}

const Home = (props) => {
  const [
    cart,
    setCart,
    total,
    setTotal,
    state,
    setState,
    data,
    setData,
    searchText,
    setsearchText,
  ] = React.useContext(CartContext);

  useEffect(() => {
    setData(Latest);
  });
  useEffect(() => {
    window.scroll(0, 0);
  }, [searchText]);
  return (
    <div>
      <Nav />
      {searchText == "" ? (
        <>
          <Slider />
          <Offer />
          <MediaControlCard />
        </>
      ) : (
        <div className="App products">
          <MediaControlCard />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default App;
