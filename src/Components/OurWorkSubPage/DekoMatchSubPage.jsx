import React from 'react'
import { IoArrowRedoCircle } from "react-icons/io5";


const DekoMatchSubPage = () => {
  return (
      <>
        <nav aria-label="breadcrumb mt-5 mb-5"><ol class="breadcrumb"></ol></nav>
      <section className='Dekolen-sect'>
        <div className="container">
        
          <h1 className='mainTitle text-center mb-4'><span className='pe-3'>DekoMatch - Marketplace</span>for architects</h1>
          
            <p className='furni-p mb-3 fs-5'><span className='spanTitle '>DekoMatch</span> is the premier marketplace for architects, designers, modular manufacturers, civil work contractors and landscaping professionals.</p>
            <p className='furni-p mb-3 fs-5'>The prevailing issue lies in the absence of a dedicated platform addressing global design challenges in a visually stunning manner. <span className='spanTitle '>DekoMatch,</span> a product of Decosmith, offers a modern, responsive website equipped with essential functionalities.</p>
          
         
         
          </div>
      </section>  
      <section className='Furnishing-bg2'>
        <div className="container">
            <div className="row justify-content-center p-5 align-items-center">
            <div className="col-md-7">
              <h2 className='underLinebg2 text-white'>For clients</h2>
              <ul className='dekomatchUl'>
                <li><IoArrowRedoCircle />Comprehensive directory of designers and architects.</li>
                <li><IoArrowRedoCircle />Seamless project posting with quotes and proposals.</li>
                <li><IoArrowRedoCircle />Secure communication channels.</li>
                <li><IoArrowRedoCircle />Curated design trends for inspiration.</li>
              </ul>
            </div>
            <div className="col-md-5">
              <img src="assets/images/work/dekometch1.jpg" alt="" className='dekoimg' />
            </div>
          </div>
          </div>
      </section>
      
      <section className='Furnishing-bg'>
        <div className="container">
      <div className="row justify-content-center p-5 align-items-center">
            <div className="col-md-7">
              <h2 className='underLine mainColor'>For designers</h2>
              <ul className='dekomatchUl2'>
                <li><IoArrowRedoCircle />Benefit from a platform to showcase portfolios.</li>
                <li><IoArrowRedoCircle />Receive project alerts tailored to your preferences.</li>
                <li><IoArrowRedoCircle />Effortlessly submit proposals.</li>
                <li><IoArrowRedoCircle />Utilize collaboration tools for seamless project management. </li>
              </ul>
            </div>
            <div className="col-md-5">
              <img src="assets/images/work/dekometch2.jpg" alt="" className='dekoimg' />
            </div>
          </div>
          <div className="row  text-center  Furnishing-lastText">
          
          <h3> <span className='spanTitle'>With DekoMatch,</span> the world of design finds its ultimate nexus, empowering professionals and clients alike to collaborate, create, and innovate.</h3>
      </div>  
          </div>
      </section>
      </>
  )
}

export default DekoMatchSubPage