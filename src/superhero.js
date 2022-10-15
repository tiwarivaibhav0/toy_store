import React, { useEffect } from "react";
import { CartContext } from "./App";
import MediaControlCard from "./card";
import { Superheros } from "./data";
import Footer from "./footer";
import Nav from "./nav";

export const SuperHero = (props) => {
  const [cart, setCart, total, setTotal,state, setState,data,setData,searchText,setsearchText] = React.useContext(CartContext);
    React.useContext(CartContext);

  useEffect(() => {
    setData(Superheros);
  });
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="App products">
      <Nav />
     
      {
        searchText==""?(<><div className="App ">
        <img
          src="https://d2s7hpbx4rtiif.cloudfront.net/sparsh/banner/image/a/c/action-figures-hp.jpg"
          alt=""
          height="350px"
          width="90%"
          style={{ objectFit: "cover", borderRadius: "2%", opacity: "0.9" }}
        />
      </div></>):(<></>)
      }
      <MediaControlCard />
      <Footer />
    </div>
  );
};
