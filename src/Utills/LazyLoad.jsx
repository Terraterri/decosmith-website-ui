import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import WebLoder from "../Components/Loder/WebLoder";
const LazyLoad = () => {
  const Home = lazy(() => import("../Page/Home"));
  const Quote = lazy(() => import("../Page/Quote"));
  const Contact = lazy(() => import("../Page/Contact"));
  const About = lazy(() => import("../Page/About"));
  const Services = lazy(() => import("../Page/Services"));
  const Product = lazy(() => import("../Page/Product"));
  const Commercial = lazy(() => import("../Page/Commercial"));
  const BlogSingle = lazy(() => import("../Page/BlogSingle"));
  const Privacy = lazy(() => import("../Page/Privacy"));
  const Term = lazy(() => import("../Page/Terms"));
  const Furnishing = lazy(() => import("../Page/FurnishingSub"));
  const Dekolen = lazy(() => import("../Page/DekolenSub"));
  const DekoMatch = lazy(() => import("../Page/DekoMatchSub"));
  const Partners = lazy(() => import("../Page/PartnersSub"));
  const ReferFriend = lazy(() => import("../Page/ReferSub"));
  const EstimatePrice = lazy(() => import("../Page/EstimatePrice"));
  
  return (
    <>
      <Suspense fallback={< WebLoder/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/product" element={<Product />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/blogSingle" element={<BlogSingle />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/term" element={<Term />} />
          <Route path="/Furnishing" element={<Furnishing />} />
          <Route path="/Dekolen" element={<Dekolen />} />
          <Route path="/DekoMatch" element={<DekoMatch />} />
          <Route path="/Partners" element={<Partners/>} />
          <Route path="/ReferFrined" element={<ReferFriend />} />
          <Route path="/estimate-price" element={<EstimatePrice />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default LazyLoad;
