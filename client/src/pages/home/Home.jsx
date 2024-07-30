/* eslint-disable react/no-unescaped-entities */
import { Header } from "../../component/Header";
import { Navbar } from "../../component/Navbar";
import Slides from "../../component/Slider";
import { Notice } from "./Notice";

export const Home = () => {
  return (
    <section className="relative">
      <div className="absolute top-0 left-0 right-0 z-20">
        <Header />
        <Navbar />
      </div>
        <Slides />
        <Notice/>
    </section>
  );
};
