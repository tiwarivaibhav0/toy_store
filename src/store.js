import { data } from "./data";
import Nav from "./nav";
import { Footer } from "./footer";
import React, { useEffect, useState } from "react";
import { DataContext } from "./App";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const Store = () => {
  const [cart, setCart,mode] = React.useContext(DataContext);
  useEffect(() => {
    window.scroll(0, 0);
  },[]);
  const addToCart = (e) => {
    var quantity;
    var flag = 0;
    var index;
    var id = e.target.id;
    for (let i = 0; i < cart.length; i++) {
      // console.log(id,)
      if (id == cart[i][0]) {
        flag = 1;
        index = i;
      }
    }
    if (flag == 0) {
      var productName, price, pimg;
      for (let i = 0; i < data.length; i++) {
        console.log(id, data[i].id);
        if (id == data[i].id) {
          productName = data[i].productName.toUpperCase();
          price = data[i].price;
          pimg = data[i].image;
        }
      }
      quantity = 1;
      setCart([...cart, [id, productName, quantity, price, pimg]]);
    } else {
      quantity = Number(cart[index][2]) + 1;
      var tempCart = [...cart];
      tempCart[index][2] = quantity;
      setCart(tempCart);
    }
  };
  var items = data;
  const scrollTop = () => {
    window.scroll(0, 0);
  };
  var searchFlag = 0;
  const [search, setSearch] = useState("");
  const [details, setDetails] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [detailsArray, setDetailsArray] = React.useState([]);

  function openModal(e) {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setDetails(false);
    setIsOpen(false);
  }
  function clickHandler(e) {
    var id = e.target.id;

    var temp = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        temp = data[i];
      }
    }
    setDetailsArray(temp);
    setIsOpen(true);
    setDetails(true);
  }

  const customStyles = {
    content: {
      top: "58%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#080600",
      border: "none",
      width: "50%",
      paddingTop: "20px",
      justifyContent: "center",

      // flexDirection: "column",
      color: "#fff",
    },
  };
  return (
    <>
      <Nav />
      <div className="App store">
        <div className="BestSellers">
          <h1 style={{ marginTop: "2%" }} className="quote">
            You are what you eat, so eat something sweet.
          </h1>
          <input
            placeholder="What are you looking for?"
            onChange={(e) => setSearch(e.target.value)}
            // value={search}
            className="searchInp"
            style={{
              padding: "15px",
              fontSize: "20px",
              border: "2px solid #8c9491",
              width: "70%",
              marginBottom: "5%",
              borderRadius: "25px",
              textAlign: "center",
            }}
          />
          <div>
            <select
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            >
              <option selected disabled>
                Filter by Price
              </option>
              <option value="50-150">₹50-₹150</option>
              <option value="151-250">₹151-₹250</option>
              <option value="251-450">₹251-₹450</option>
              <option value="450+">₹450+</option>

              <option value="">Clear Filter</option>
            </select>
            <select
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            >
              <option selected disabled>
                Filter By Category
              </option>
              <option value="halwa">Halwa</option>
              <option>Ladoo</option>
              <option>Chhena</option>
              <option>Khoya</option>
              <option>Breakfast</option>
              <option>Others</option>
              <option value="">Clear Filter</option>
            </select>
          </div>
          <h1 style={{ marginTop: "5%" }}>Our Products</h1>
          <div className="products2">
            {search === "" ? (
              <>
                {" "}
                {items.map((it, i) => (
                  <div className="product2" style={{backgroundColor:mode}}>
                    <img
                      src={it.image}
                      alt=""
                      onClick={clickHandler}
                      id={it.id}
                    />
                    <p>{it.productName}</p>

                    <p>₹{it.price}</p>
                    <button id={it.id} onClick={addToCart}>
                      Add to Cart
                    </button>
                  </div>
                ))}
              </>
            ) : (
              <>
                {items.map((it, i) => (
                  <>
                    {it.category
                      .toLowerCase()
                      .includes(search.toLowerCase()) ? (
                      <>
                        {" "}
                        <div className="product2" style={{backgroundColor:mode}}>
                          <img
                            src={it.image}
                            alt=""
                            onClick={clickHandler}
                            id={it.id}
                          />
                          <p>{it.productName}</p>

                          <p>₹{it.price}</p>
                          <button id={it.id} onClick={addToCart}>
                            Add to Cart
                          </button>
                          <span style={{ visibility: "hidden" }}>
                            {(searchFlag = 1)}
                          </span>
                        </div>
                      </>
                    ) : null}
                  </>
                ))}
                {searchFlag === 0 ? (
                  <div className="product2">
                    <h2>No Products found!</h2>
                    <button onClick={() => setSearch("")}>Show All</button>
                  </div>
                ) : null}
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
      <div>
        <button onClick={scrollTop} className="top">
          <i class="fa-solid fa-arrow-up"></i>
        </button>
      </div>
      {details === false ? null : (
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel=""
        >
          {" "}
          <div
            style={{ objectFit: "cover", textAlign: "center" }}
            className="details"
          >
            <img src={detailsArray.image} alt="" height="300px"  />
            <p>{detailsArray.details}</p>
            <button id={detailsArray.id} onClick={addToCart}>
              Add to Cart
            </button>
          </div>
          <button
            onClick={closeModal}
            id="close"
            style={{ position: "absolute", top: "0", right: "0" }}
          >
            X
          </button>
        </Modal>
      )}
    </>
  );
};
