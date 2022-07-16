import React from "react";
import Banner from "./Banner";
import Footer from "../Footer";
import MdSection from "./MdSection";
import ContactUs from "../ContactUs";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <MdSection></MdSection>
      <ContactUs></ContactUs>

      <Footer></Footer>
    </div>
  );
};

export default Home;
