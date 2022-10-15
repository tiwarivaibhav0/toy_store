import React, { useEffect } from "react";
import { CartContext } from "./App";
import MediaControlCard from "./card";
import { dolls, models, Superheros } from "./data";
import Footer from "./footer";
import Nav from "./nav";

export const Models = (props) => {
  const [cart, setCart, total, setTotal,state, setState,data,setData,searchText,setsearchText] = React.useContext(CartContext);
    React.useContext(CartContext);

  useEffect(() => {
    setData(models);
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
          src="  https://mymodernmet.com/wp/wp-content/uploads/2021/04/architecture-model-building-kit-3d-puzzle-0.jpg"
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
