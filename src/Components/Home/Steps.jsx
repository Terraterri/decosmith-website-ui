import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Steps = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      partialVisibilityGutter: 40
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      partialVisibilityGutter: 30
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 2,
      partialVisibilityGutter: 20
    },
    minmobile: {
      breakpoint: { max: 475, min: 0 },
      items: 1,
      partialVisibilityGutter: 20
    },
  };

  const projects = [
    {
      id: 1,
      title: "Meet our Designer",
      categories: ["Decor", "Lighting"],
      description: "Connect with our expert designers to discuss your vision, preferences, and requirements.",
      imageUrl: "assets/images/banner/ban.png",
      step: "STEP 1"
    },
    {
      id: 2,
      title: "Visit our Experience Center",
      categories: ["Lighting"],
      description: "Immerse yourself in our interactive Experience Center, where you can explore design inspirations and material samples firsthand.",
      imageUrl: "assets/images/banner/form.jpg",
      step: "STEP 2"
    },
    {
      id: 3,
      title: "Explore in Metaverse",
      categories: ["Lighting"],
      description: "Step into the virtual realm of the metaverse, where you can visualize and customize your space in real-time, experimenting with layouts, colors, and furnishings.",
      imageUrl: "assets/images/banner/step3.jpg",
      step: "STEP 3"
    },
    {
      id: 4,
      title: "Design Finalization",
      categories: ["Lighting"],
      description: "Collaborate with our team to refine your design, ensuring every detail reflects your unique style and needs.",
      imageUrl: "assets/images/banner/step1.jpg",
      step: "STEP 4"
    },
    {
      id: 5,
      title: "Quotation Approval",
      categories: ["Lighting"],
      description: "Review and approve the comprehensive quotation tailored to your project specifications and budget.",
      imageUrl: "assets/images/banner/step2.jpg",
      step: "STEP 5"
    },
    {
      id: 6,
      title: "Project Execution",
      categories: ["Lighting"],
      description: "Watch as your vision comes to life, with our skilled craftsmen and project managers overseeing every detail of the construction and installation process.",
      imageUrl: "assets/images/project/bathroom3.jpg",
      step: "STEP 6"
    },
    {
      id: 7,
      title: "Move In",
      categories: ["Lighting"],
      description: "Finally, step into your transformed space and experience the joy of living in a home that reflects your personality and aspirations.",
      imageUrl: "assets/images/banner/step4.jpg",
      step: "STEP 7"
    },


  ];

  return (
   <>
     {/* <div className="section section-padding bg-img overly-style-1 opacity-point-7">
      <div className="container-fluid m-auto">
        <div className="section-title text-center mb-lg-9 mb-md-7">
          <h2 className="title white">
            How It<span> Works</span>
          </h2>
          <div className="row text-center Furnishing-lastText">
            <h3 className="text-white">
              <span className="spanTitle">At Decosmith,</span> Each step of our process is meticulously crafted to ensure your journey is smooth, inspiring, and ultimately transformative.
            </h3>
          </div>
        </div>

        <div className="steps-carousel-container">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            itemClass="carousel-item-padding-40-px"
            centerMode={true}
          >
            {projects.map(project => (
              <div className="step-card" key={project.id}>
                <div className="step-card-inner">
                  <span className="step-number">{project.step}</span>
                  <div className="step-image-container">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="step-image"
                    />
                  </div>
                  <div className="step-content">
                    <h3 className="step-title">{project.title}</h3>
                    <p className="step-description">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div> */}

      <div className="section  how_its_works section-padding bg-img overly-style-1 opacity-point-7 opas">
        <div className="container-fluid m-auto">
        <div className="section-title text-center mb-lg-9 mb-md-7">
          <h2 className="title white text-uppercase">
            How It<span> Works</span>
          </h2>
          <div className="row text-center Furnishing-lastText">
            <h3 className="text-white">
              <span className="spanTitle">At Decosmith,</span> Each step of our process is meticulously crafted to ensure your journey is smooth, inspiring, and ultimately transformative.
            </h3>
          </div>
        </div>

          <div className="">
            <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            itemClass="carousel-item-padding-40-px"
            // centerMode={true}
          >
              {projects.map(project => (
                <div className="column-item project-entries" key={project.id}>
                  <span className="projectStep">{project.step}</span>
                  <article className="project">
                    <div className="project-inner">
                      <div className="project-post-thumbnail">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="project-image"
                        />
                      </div>
                      <div className="project-content">
                        <h5 className="entry-title">
                          <a href={project.link}>{project.title}</a>
                        </h5>
                       
                        <div className="entry-desc">{project.description}</div>
                      
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
   </>
  );
};

export default Steps;
