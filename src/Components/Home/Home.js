import React from "react";
import Banner from "./Banner";
import Footer from "../Footer";
import MdSection from "./MdSection";
import ContactUs from "../ContactUs";
import Gallery from "./Gallery";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <MdSection></MdSection>
      <Gallery></Gallery>
      <ContactUs></ContactUs>

      <Footer></Footer>
    </div>
  );
};

export default Home;
