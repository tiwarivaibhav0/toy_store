import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";
export const Slider = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/store");
  };
  return (
    <div style={{ position: "relative", marginTop: "9%" }} className="slider" onClick={()=>{window.scroll(0,200)}}>
      <Carousel
        showArrows={false}
        showThumbs={false}
        showIndicators={false}
        autoPlay={true}
        interval={2000}
        infiniteLoop={true}
        showStatus={false}
      >
        <div style={{ position: "relative" }}>
          <img src="/1.avif" alt="" height="350px" />
          {/* <button
            style={{
              position: "absolute",
              top: "17rem",
              left: "8rem",
              zIndex: "1",
              backgroundColor: "#1388A9",
              width: "200px",
              // height: "50px",
              borderRadius: "15px",
              color: "#FDD835",
              fontSize: "30px",
            }}
            onClick={clickHandler}
          >
            Order Now
          </button> */}
        </div>
        

        <div style={{ position: "relative" }}>
          <img src="  https://www.lego.com/cdn/cs/set/assets/blt33d0d695524c13d2/XXXXX-Project-Page-LiveDate-Hero-Standard-Large.jpg?fit=crop&format=jpg&quality=80&width=1600&height=500&dpr=1" alt="" height="350px" style={{objectFit:"cover"}} />
         
        </div>
        <div style={{ position: "relative" }}>
          <img src="https://www.insuranceadvisor.com/files/uploads/business/toy-store-insurance-head-banner.webp" alt="" height="350px" />
          {/* <button
            style={{
              position: "absolute",
              top: "18.5rem",
              left: "8rem",
              zIndex: "1",
              backgroundColor: "#BA3B2F",
              width: "200px",
              // height: "50px",
              borderRadius: "15px",
              color: "#FDD835",
              fontSize: "30px",
            }}
            onClick={clickHandler}
          >
            Order Now
          </button> */}
        </div>
      </Carousel>
    </div>
  );
};
