import React from "react";
import Banner from "../Components/Home/Banner";
import About from "../Components/Home/About";
import Steps from "../Components/Home/Steps";
import Gallery from "../Components/Home/Gallery";
import Choose from "../Components/Home/Choose";
import Recent from "../Components/Home/Recent";
import Blog from "../Components/Home/Blog";
import CaseStudies from "../Components/Home/CaseStudies";


const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Steps />
      <Gallery />
      <Choose />
      <Recent />
      <Blog />
      <CaseStudies />
    </>
  );
};

export default Home;
