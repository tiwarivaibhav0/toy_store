import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { Button, Slider } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { CartContext } from "./App";
import { dolls, educational, Latest, models, Superheros } from "./data";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function MediaControlCard() {
  const theme = useTheme();
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
  const globalData = [
    ...Latest,
    ...Superheros,
    ...dolls,
    ...educational,
    ...models,
  ];
  const [range, setRange] = React.useState(1000);
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
  const [details, setDetails] = React.useState(false);
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
    for (let i = 0; i < globalData.length; i++) {
      if (globalData[i].id == id) {
        temp = globalData[i];
      }
    }
    setDetailsArray(temp);
    setIsOpen(true);
    setDetails(true);
  }

  const customStyles = {
    content: {
      position: "absolute",
      top: "58%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#4DB6AC",
      border: "none",
      width: "60%",
      paddingTop: "20px",
      justifyContent: "center",
      // flexDirection: "column",
      color: "#000",
      fontFamily: "'Amaranth', sans-serif",
      overflowY: "scroll",
      height: "70vh",
    },
  };
  React.useEffect(() => {
    setRange(1000);
  }, []);
  var flag = 0;
 
  const [value, setValue] = React.useState([200,1000]);
  function valuetext(value) {
    return `${value}°C`;
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="range">
        <p>Select Price range</p>
        <Slider
          
          style={{ marginTop: "4%" }}
          getAriaLabel={() => 'Temperature range'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="on"
          getAriaValueText={valuetext}
          min={200}
          max={1000}
          step={100}
          
        />
      </div>
      <div className="list" id="products">
        {searchText == "" ? (
          <>
            {data.map((el, index) => (
              <>
                {" "}
                {el.price <= value[1]&&el.price>=value[0] ? (
                  <>
                    <Card
                      sx={{
                        backgroundColor: "#fff",
                        width: "250px",
                        minHeight: "160px",
                        // justifyContent: "space-between",
                        marginTop: "20px",
                        borderRadius: "20px",
                        boxShadow: "0px 0px 10px 0px  black",
                        textAlign: "center",
                      }}
                    >
                      <Box sx={{ border: "1px solid black" }}>
                        {" "}
                        <CardContent sx={{ flex: "1 0 auto" }}>
                          <div className="container"><img
                            src={el.image}
                            alt=""
                            style={{
                              width: "200px",
                              height: "200px",
                              cursor: "pointer",
                              // objectFit: "cover",
                            }}
                            className="cardImage"
                            id={el.id}
                            onClick={clickHandler}
                          />
                          <div class="middle">
                            <div class="text"  id={el.id}
                            onClick={clickHandler}>See Details</div>
                          </div></div>
                          

                          <Typography
                            component="div"
                            variant="h5"
                            sx={{
                              fontFamily: "'Dancing Script', cursive;",
                              fontWeight: "300",
                              height: "30px",
                              marginBottom: "30px",
                            }}
                          >
                            {el.name}
                          </Typography>
                          <p>
                            {" "}
                            <span>Rating</span>
                            <br />
                            {el.reviews.map((item) => (
                              <span>
                                <i
                                  class="fa-solid fa-star"
                                  style={{ color: "crimson", margin: "1%" }}
                                ></i>
                              </span>
                            ))}
                          </p>
                          <Typography color="text.secondary" component="span">
                            <span> ₹{el.price}</span>
                            <br />
                          </Typography>

                          <Button
                            sx={{
                              my: 2,
                              color: "#E53935",
                              border: "2px solid #E53935",
                              fontFamily: "'Permanent Marker', cursive",
                            }}
                            style={{ textTransform: "none" }}
                            onClick={addCart}
                            id={el.id}
                          >
                            Add To Cart
                          </Button>
                        </CardContent>
                      </Box>
                    </Card>
                  </>
                ) : (
                  <></>
                )}
              </>
            ))}
          </>
        ) : (
          <>
            {globalData.map((el, index) => (
              <>
                {el.name.toLowerCase().includes(searchText.toLowerCase()) ? (
                  <>
                    <span style={{ visibility: "hidden" }}>{(flag = 1)}</span>
                    {el.price <= value[1]&&el.price>=value[0] ? (
                      <>
                        <Card
                          sx={{
                            backgroundColor: "#42A5F5",
                            width: "250px",
                            minHeight: "160px",
                            // justifyContent: "space-between",
                            marginTop: "20px",
                            borderRadius: "20px",
                            boxShadow: "0px 0px 10px 0px  black",
                            textAlign: "center",
                          }}
                        >
                          <Box sx={{ border: "1px solid black" }}>
                            {" "}
                            <CardContent sx={{ flex: "1 0 auto" }}>
                              <div className="container"> <img
                                src={el.image}
                                alt=""
                                style={{
                                  width: "200px",
                                  height: "200px",

                                  // objectFit: "cover",
                                }}
                                className="cardImage"
                                id={el.id}
                                onClick={clickHandler}
                              />
                              <div class="middle">
                            <div class="text"  id={el.id}
                            onClick={clickHandler}>See Details</div>
                          </div></div>
                             
                              <Typography
                                component="div"
                                variant="h5"
                                sx={{
                                  fontFamily: "'Dancing Script', cursive;",
                                  fontWeight: "300",
                                  height: "30px",
                                  marginBottom: "30px",
                                }}
                              >
                                {el.name}
                              </Typography>
                              <p>
                                {" "}
                                <span>Rating</span>
                                <br />
                                {el.reviews.map((item) => (
                                  <span>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "#C6FF00", margin: "1%" }}
                                    ></i>
                                  </span>
                                ))}
                              </p>
                              <Typography
                                color="text.secondary"
                                component="span"
                              >
                                <span> ₹{el.price}</span>
                                <br />
                              </Typography>

                              <Button
                                sx={{
                                  my: 2,
                                  color: "#E53935",
                                  border: "2px solid #E53935",
                                  fontFamily: "'Permanent Marker', cursive",
                                }}
                                style={{ textTransform: "none" }}
                                onClick={addCart}
                                id={el.id}
                              >
                                Add To Cart
                              </Button>
                            </CardContent>
                          </Box>
                        </Card>
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <></>
                )}
              </>
            ))}
            {flag == 0 ? (
              <>
                <Card
                  sx={{
                    backgroundColor: "#fff",
                    width: "250px",
                    minHeight: "160px",
                    // justifyContent: "space-between",
                    marginTop: "20px",
                    borderRadius: "20px",
                    boxShadow: "0px 0px 10px 0px  black",
                    textAlign: "center",
                  }}
                >
                  <Box sx={{ border: "1px solid black" }}>
                    {" "}
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography
                        component="div"
                        variant="h5"
                        sx={{
                          fontFamily: "'Dancing Script', cursive;",
                          fontWeight: "300",
                          height: "30px",
                          marginBottom: "30px",
                        }}
                      >
                        No Product Found{" "}
                      </Typography>
                      <Typography color="text.secondary" component="span">
                        <br />
                      </Typography>

                      <Button
                        sx={{
                          my: 2,
                          color: "#E53935",
                          border: "2px solid #E53935",
                          fontFamily: "'Permanent Marker', cursive",
                        }}
                        style={{ textTransform: "none" }}
                        onClick={() => {
                          setsearchText("");
                        }}
                      >
                        Go back to All Products
                      </Button>
                    </CardContent>
                  </Box>
                </Card>
              </>
            ) : (
              <></>
            )}
          </>
        )}
      </div>
      {details === false ? null : (
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel=""
          className=""
        >
          {" "}
          <div
            style={{
              objectFit: "cover",
              textAlign: "center",
            }}
            className="details animate__animated animate__slideInLeft"
          >
            <img src={detailsArray.image} alt="" height="300px" width="200px" />
            <p>{detailsArray.name}</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button
              id={detailsArray.id}
              onClick={addCart}
              style={{
                my: 2,
                color: "#E53935",
                border: "2px solid #E53935",
                fontFamily: "'Permanent Marker', cursive",
              }}
            >
              Add to Cart
            </button>
          </div>
          <button
            onClick={closeModal}
            id="close"
            style={{ position: "absolute", top: "0", right: "0",fontFamily: "'Permanent Marker', cursive", }}
          >
            X
          </button>
        </Modal>
      )}
    </>
  );
}
