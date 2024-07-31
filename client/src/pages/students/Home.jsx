
import { Footer } from "../../component/Footer";
import Slides from "../../component/Slider";
import { Notice } from "../home/Notice";
export const Home = () => {
  const imageUrls = [
    "https://img.freepik.com/free-vector/back-school-hand-drawn-flat-illustration_23-2149456161.jpg?w=740&t=st=1722333401~exp=1722334001~hmac=1885bdad1bae14808ed343a31422bdecf5f7a828c62ec85ac2b386207f5322fa",
    "https://img.freepik.com/free-vector/back-school-hand-drawn-flat-illustration_23-2149456161.jpg?w=740&t=st=1722333401~exp=1722334001~hmac=1885bdad1bae14808ed343a31422bdecf5f7a828c62ec85ac2b386207f5322fa",
    "https://img.freepik.com/free-vector/back-school-hand-drawn-flat-illustration_23-2149456161.jpg?w=740&t=st=1722333401~exp=1722334001~hmac=1885bdad1bae14808ed343a31422bdecf5f7a828c62ec85ac2b386207f5322fa",

  ];
  return (
    <section className="relative">
      <div className="absolute top-0 left-0 right-0 z-20">
      </div>
      <Slides
      data={imageUrls}
      dots={true}
      infinite={true}
      slidesToShow={1}
      slidesToScroll={1}
      autoplay={true}
      speed={3000}
      autoplaySpeed={2000}
      cssEase="linear"
      pauseOnHover={false}
      overlay={true}
      className="custom-slider-class"
    />
        <Notice/>
    </section>
  );
};
