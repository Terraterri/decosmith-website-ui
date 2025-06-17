import React from 'react'

const DekolenSubPage = () => {
  return (
      <>
           <nav aria-label="breadcrumb mt-5 mb-5"><ol class="breadcrumb"></ol></nav>
      <section className='Dekolen-sect'>
        <div className="container">
          <div className="row justify-content-center">
          <h1 className='mainTitle text-center'><span className='pe-3'>DekoLens</span>Where Design Meets the Metaverse</h1>
            
            <div className="col-md-7">
            <p className='furni-p mb-3 text-start'><span className='spanTitle'>DekoLens</span> revolutionizes the design landscape with its cloud-based Metaverse application, empowering architects, designers, and developers to seamlessly transition their creations into the virtual realm. </p>
            <p className='furni-p mb-3 text-start'>With a vast library of pre-defined Metaverse properties including furniture, furnishings, and textures, users can customize their designs with unparalleled flexibility. Moreover, designers and architects can import custom assets, infusing their unique vision into the digital environment. </p>
            <p className='furni-p mb-3 text-start'>
            Through <span className='spanTitle'>DekoLens,</span> users can interact with prototypes such as furniture and lighting, immersing themselves in the spatial experience like never before. Join us as we bridge the gap between design and the Metaverse, unlocking limitless possibilities for creativity and innovation.
            </p>
            </div>
            <div className="col-md-5">
              <img src="assets/images/work/deckolensub.jpg" alt="" className='dekoimg' />
            </div>
            </div>
          </div>
      </section>
      </>
  )
}

export default DekolenSubPage