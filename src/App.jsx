import { useState } from "react";
import Header from "./Components/Includes/Header";
import Footer from "./Components/Includes/Footer";
import "./App.css";
import LazyLoad from "./Utills/LazyLoad";

function App() {
  return (
    <>
      <Header />
      <LazyLoad />
      <Footer />
    </>
  );
}

export default App;


 