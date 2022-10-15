import { Button, Drawer } from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import CloseIcon from "@mui/icons-material/Close";
import { CartContext } from "./App";
import DeleteIcon from "@mui/icons-material/Delete";
import { dolls, educational, Latest, models, Superheros } from "./data";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const [cart, setCart, , , state, setState] = React.useContext(CartContext);
 
  const globalData=[...Latest,...Superheros,...dolls,...educational,...models]

  const deleteIcon = (e) => {
    var deleteId = e.target.id;
    if(window.confirm("Do you really want to delete this from cart?")){
      var tempCart = [...cart];
  
      tempCart = tempCart.filter((exp) => exp[0] != deleteId);
      setCart(tempCart);
    }
   
  };
  const delCart = (e) => {
    if(window.confirm("Do you really want to delete all Items?")){
  
      setCart([]);
    }
   
  };
  const addCart = (e) => {
    // alert(e.target.id);
    var tempCart = [];
    var index;
    var id = e.target.id;
    var flag = 0;
    for (let i = 0; i < cart.length; i++) {
      if (id == cart[i][0]) {
      

        tempCart = [...cart];
        index = i;
        flag = 1;
      }
    }
    var dataIndex;
    for (let i = 0; i < globalData.length; i++) {
      if (globalData[i].id == id) {
        dataIndex = i;
      }
    }
    var temp = { ...globalData[dataIndex] };
    if (flag == 0) {
      var newArr = [id, temp, 1];
      setCart([...cart, newArr]);
    } else {
      tempCart[index][2] = tempCart[index][2] + 1;
      setCart(tempCart);
    }
  };
  const decCart = (e) => {
    // alert(e.target.id);
    var tempCart = [];
    var index;
    var id = e.target.id;
    for (let i = 0; i < cart.length; i++) {
      if (id == cart[i][0]) {
      

        tempCart = [...cart];
        index = i;
      }
    }
    
    
   var quantity = tempCart[index][2] - 1;
      if(quantity==0){
        if(window.confirm("Do you really want to delete this from cart?")){
          tempCart = tempCart.filter((exp) => exp[0] != id);
          setCart(tempCart);

        }
      }
      else{
        tempCart[index][2]=quantity;
        setCart(tempCart);

      }
    
  };
 const navigate=useNavigate();
  return (
    <div>
      {/* <div className="Footer">
        <button
          onClick={() => {
            setState(true);
          }}
        >
          <KeyboardDoubleArrowUpIcon />
        </button>
        <p>Your Orders ({cart.length})</p>
        <p>Subtotal: ₹{sum}</p>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#4DB6AC",
            color: "#000",
            fontFamily: "'Permanent Marker', cursive",
          }}
          onClick={() => {
            if (cart.length > 0) {
              alert("Order Placed, will be delivered ASAP!!!");
              setCart([]);
            } else {
              alert("Add something in Cart before checkout");
            }
          }}
        >
          Checkout
        </Button>
      </div> */}
      <div className="footer">
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div>
                <h6>About</h6>
                <p>
                  <span style={{ fontFamily: "'Permanent Marker', cursive" }}>
                    ToysWorld
                  </span>{" "}
                  is an Online Store Exclusively for Toys & Games. Buy Authentic
                  Toys, Games & Collectibles of Nerf, Marvel, Barbie, Hot
                  Wheels, Funskool, Lego, Funko & More!.
                </p>
              </div>

              <div>
                <h6>Quick Links</h6>
                <ul className="footer-links">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Sitemap</a>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
          </div>
          <div className="container">
            <div className="row">
              <div className="">
                <p className="copyright-text">
                  Copyright &copy; 2022 All Rights Reserved by
                  <a href="#"> ToysWorld</a>.Com
                </p>
              </div>

              <div className="">
                <ul className="social-icons">
                  <li>
                    <a className="facebook" href="#">
                      <i class="fa-brands fa-google"></i>
                    </a>
                  </li>
                  <li>
                    <a className="twitter" href="#">
                      <i class="fa-brands fa-twitter"></i>{" "}
                    </a>
                  </li>
                  <li>
                    <a className="dribbble" href="#">
                      <i class="fa-brands fa-dribbble"></i>{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <Drawer
        anchor="right"
        open={state}
        onClose={() => {
          setState(false);
        }}
      >
        {" "}
        <div className="" style={{ position: "relative" }}>
          {cart.length === 0 ? (
            <>
              {" "}
              <h2 style={{ marginRight: "20px", marginTop: "12%" }}>
                Your Cart is empty!
              </h2>
              <button
                onClick={() => {
                  setState(false);
                }}
                style={{ position: "absolute", top: "0" }}
              >
                <CloseIcon />
              </button>
            </>
          ) : (
            <div className="cart" style={{ position: "relative" }}>
              <div style={{ marginTop: "12%" }}>
                {" "}
                <button  style={{
                  backgroundColor: "#D50000",
                  color: "#fff",
                  fontFamily: "'Permanent Marker', cursive",
                  marginLeft:"10px"
               
                }}
                onClick={delCart} > Empty cart</button>
                <button style={{
                  backgroundColor: "#4DB6AC",
                  color: "#000",
                  fontFamily: "'Permanent Marker', cursive",
                  marginLeft:"10px"
               
                }} onClick={()=>{navigate("/checkout")}}>Checkout</button>
              </div>
              {cart.map((item, index) => (
                <div key={item[0]} className="cartItem">
                  <h2>{item[1].name}</h2>
                  <p>Price: ₹{item[1].price}</p>
                  <p>
                    <button style={{fontSize:"20px",marginRight:"10px",backgroundColor:"#FDD835"}} onClick={decCart} id={item[0]}>-</button>
                    {item[2]}
                    <button style={{fontSize:"20px",marginLeft:"10px",backgroundColor:"#8BC34A"}} onClick={addCart} id={item[0]}>+</button>
                  </p>

                  <i
                    class="fa fa-trash"
                    aria-hidden="true"
                    style={{ color: "red" }}
                    onClick={deleteIcon}
                    id={item[0]}
                  ></i>
                </div>
              ))}
              <button
                onClick={() => {
                  setState(false);
                }}
                style={{ position: "absolute" }}
              >
                <CloseIcon />
              </button>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#4DB6AC",
                  color: "#000",
                  fontFamily: "'Permanent Marker', cursive",
                  marginTop: "2%",
                  marginLeft: "2%",
                }}
                onClick={() => {
                  navigate("/checkout");
                }}
              >
                Checkout
              </Button>
            </div>
          )}
        </div>
      </Drawer>
    </div>
  );
};

export default Footer;
