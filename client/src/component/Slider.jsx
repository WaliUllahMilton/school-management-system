import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from 'prop-types';

function Slides({
  data = [],
  dots = false,
  infinite = true,
  slidesToShow = 1,
  slidesToScroll = 1,
  autoplay = true,
  speed = 1000,
  autoplaySpeed = 3000,
  cssEase = "ease-in-out",
  pauseOnHover = false,
  className = "",
  overlay = false
}) {
  console.log(data)
  const settings = {
    dots,
    infinite,
    slidesToShow,
    slidesToScroll,
    autoplay,
    speed,
    autoplaySpeed,
    cssEase,
    pauseOnHover,
    className: `outline-none ${className}`
  };

  return (
    <div className={`slider-container max-h-screen min-h-screen overflow-hidden ${className}`}>
      {data.length > 0 ?
        <div className="">
          <Slider {...settings}>
          {data.map((item, index) => (
          <div key={index} className="relative w-full h-full">
            {overlay && <div className="absolute inset-0 min-h-screen w-full bg-gradient-to-b from-black opacity-40 z-10"></div>}
            
            <img
              className="h-full w-full object-cover"
              src={item}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider> 
        </div>
        : (
          <div className="flex justify-center min-h-[400px] items-center">
            <h2>Loading...</h2>
          </div>
        )}
    
    </div>
  );
}

// Define prop types for validation
Slides.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
  dots: PropTypes.bool,
  infinite: PropTypes.bool,
  slidesToShow: PropTypes.number,
  slidesToScroll: PropTypes.number,
  autoplay: PropTypes.bool,
  speed: PropTypes.number,
  autoplaySpeed: PropTypes.number,
  cssEase: PropTypes.string,
  pauseOnHover: PropTypes.bool,
  className: PropTypes.string,
  overlay : PropTypes.bool
};

export default Slides;
