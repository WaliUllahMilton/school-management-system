import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Slides() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    className : "outline-none"
  };

  return (
    <div className="slider-container max-h-screen overflow-hidden">
      <Slider {...settings}>
        {Array(5).fill().map((_, index) => (
          <div key={index} className="w-full h-full">
            <div className="min-h-screen w-full opacity-10 bg-gradient-to-b from-black absolute top-0 left-0 right-0 z-10"></div>

            <img
              className="h-full w-full object-cover"
              src="https://img.freepik.com/free-vector/back-school-hand-drawn-flat-illustration_23-2149456161.jpg?w=740&t=st=1722333401~exp=1722334001~hmac=1885bdad1bae14808ed343a31422bdecf5f7a828c62ec85ac2b386207f5322fa"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slides;
