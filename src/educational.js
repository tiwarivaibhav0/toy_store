import React, { useEffect } from "react";
import { CartContext } from "./App";
import MediaControlCard from "./card";
import { dolls, educational, Superheros } from "./data";
import Footer from "./footer";
import Nav from "./nav";

export const Educational = (props) => {
  const [cart, setCart, total, setTotal,state, setState,data,setData,searchText,setsearchText] = React.useContext(CartContext);
    React.useContext(CartContext);

  useEffect(() => {
    setData(educational);
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
          src="https://i.ytimg.com/vi/GDQovUTdvyc/maxresdefault.jpg"
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
