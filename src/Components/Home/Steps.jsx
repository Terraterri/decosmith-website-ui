import React from "react";

const Steps = () => {

  const projects = [
    {
      id: 1,
      title: "Meet our Designer",
      categories: ["Decor", "Lighting"],
      description: "Connect with our expert designers to discuss your vision, preferences, and requirements.",
      imageUrl: "assets/images/banner/ban.png",
      link: "#"
    },
    {
      id: 2,
      title: "Visit our Experience Center",
      categories: ["Lighting"],
      description: "Immerse yourself in our interactive Experience Center, where you can explore design inspirations and material samples firsthand.",
      imageUrl: "assets/images/banner/form.jpg",
      link: "#"
    },
    {
      id: 3,
      title: "Explore in Metaverse",
      categories: ["Lighting"],
      description: "Step into the virtual realm of the metaverse, where you can visualize and customize your space in real-time, experimenting with layouts, colors, and furnishings.",
      imageUrl: "assets/images/banner/banner10.jpg",
      link: "#"
    },
    {
      id: 4,
      title: "Design Finalization",
      categories: ["Lighting"],
      description: "Collaborate with our team to refine your design, ensuring every detail reflects your unique style and needs.",
      imageUrl: "assets/images/project/bathroom3.jpg",
      link: "#"
    },
    // {
    //   id: 5,
    //   title: "Quotation Approval",
    //   categories: ["Lighting"],
    //   description: "Review and approve the comprehensive quotation tailored to your project specifications and budget.",
    //   imageUrl: "assets/images/project/bathroom3.jpg",
    //   link: "#"
    // },
    // {
    //   id: 6,
    //   title: "Project Execution",
    //   categories: ["Lighting"],
    //   description: "Watch as your vision comes to life, with our skilled craftsmen and project managers overseeing every detail of the construction and installation process.",
    //   imageUrl: "assets/images/project/bathroom3.jpg",
    //   link: "#"
    // },
    // {
    //   id: 7,
    //   title: "Move In",
    //   categories: ["Lighting"],
    //   description: "Finally, step into your transformed space and experience the joy of living in a home that reflects your personality and aspirations.",
    //   imageUrl: "assets/images/project/bathroom3.jpg",
    //   link: "#"
    // },


  ];

  return (
    <>
      <div className="section section-padding bg-img overly-style-1 opacity-point-7">
        <div className="container-fluid m-auto">
          <div className="section-title text-center mb-lg-9 mb-md-7 ">
            <h2 className="title white">
              How It<span> Works</span>
            </h2>
            <div className="row  text-center  Furnishing-lastText">

              <h3 className="text-white"><span className="spanTitle">At DECOSMITH,</span> Each step of our process is meticulously crafted to ensure your journey is smooth, inspiring, and ultimately transformative.</h3>
            </div>
          </div>
          {/* <div className="row mb-1 justify-content-center">


            <div className="col-lg-4 col-md-4 col-sm-6 mb-5">

              <div class="cardBox">
                <div class="card step-image1">

                  <div className="backcver"></div>
                  <div class="content">
                    <h2 class=""> <span className="spanNum">01.</span>Meet our Designer </h2>
                    <p class="data-content">Connect with our expert designers to discuss your vision, preferences, and requirements.</p>
                  </div>
                  <h2 class="heading"> <span className="spanNum">01.</span>Meet our Designer </h2>
                </div>
              </div>
            </div>



            <div className="col-lg-4 col-md-4 col-sm-6 mb-5">

              <div class="cardBox">
                <div class="card step-image2">

                  <div className="backcver"></div>
                  <div class="content">
                    <h2 class=""> <span className="spanNum">02.</span>Visit our Experience Center </h2>
                    <p class="data-content">Immerse yourself in our interactive Experience Center, where you can explore design inspirations and material samples firsthand.</p>
                  </div>
                  <h2 class="heading2"> <span className="spanNum">02.</span>Visit our Experience Center </h2>
                </div>


              </div>
            </div>



            <div className="col-lg-4 col-md-4 col-sm-6 mb-5">
              <div class="cardBox">
                <div class="card step-image3">

                  <div className="backcver"></div>
                  <div class="content">
                    <h2 class=""> <span className="spanNum">03.</span>Explore  in Metaverse</h2>
                    <p class="data-content">Step into the virtual realm of the metaverse, where you can visualize and customize your space in real-time, experimenting with layouts, colors, and furnishings.</p>
                  </div>
                  <h2 class="heading2"> <span className="spanNum">03.</span>Explore in Metaverse</h2>
                </div>
              </div>

            </div>


            <div className="col-lg-4 col-md-4 col-sm-6 mb-5">
              <div class="cardBox">
                <div class="card step-image4">

                  <div className="backcver"></div>
                  <div class="content">
                    <h2 class=""> <span className="spanNum">04.</span>Design Finalization</h2>
                    <p class="data-content">Collaborate with our team to refine your design, ensuring every detail reflects your unique style and needs.</p>
                  </div>
                  <h2 class="heading"> <span className="spanNum">04.</span>Design Finalization </h2>
                </div>
              </div>

            </div>




            <div className="col-lg-4 col-md-4 col-sm-6 mb-5">
              <div class="cardBox">
                <div class="card step-image5">

                  <div className="backcver"></div>
                  <div class="content">
                    <h2 class=""> <span className="spanNum">05.</span>Quotation Approval</h2>
                    <p class="data-content">Review and approve the comprehensive quotation tailored to your project specifications and budget.</p>
                  </div>
                  <h2 class="heading3"> <span className="spanNum">05.</span>Quotation Approval</h2>
                </div>
              </div>


            </div>



            <div className="col-lg-4 col-md-4 col-sm-6 mb-5">
              <div class="cardBox">
                <div class="card step-image6">

                  <div className="backcver"></div>
                  <div class="content">
                    <h2 class=""> <span className="spanNum">06.</span>Project Execution</h2>
                    <p class="data-content">Watch as your vision comes to life, with our skilled craftsmen and project managers overseeing every detail of the construction and installation process.</p>
                  </div>
                  <h2 class="heading2"> <span className="spanNum">06.</span>Project Execution </h2>
                </div>
              </div>

            </div>



            <div className="col-lg-4 col-md-4 col-sm-6 mb-5">
              <div class="cardBox">
                <div class="card step-image7">

                  <div className="backcver"></div>
                  <div class="content">
                    <h2 class=""> <span className="spanNum">07.</span>Move In</h2>
                    <p class="data-content">Finally, step into your transformed space and experience the joy of living in a home that reflects your personality and aspirations.</p>
                  </div>
                  <h2 class="heading3"> <span className="spanNum">07.</span>Move In</h2>
                </div>
              </div>

            </div>

          </div> */}
          <div className="swiper-wrapper flex-wrap">
            {projects.map(project => (
              <div className="column-item project-entries" key={project.id}>
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
                      {/* <div className="entry-category">
                        {project.categories.join(" / ")}
                      </div> */}
                      <div className="entry-desc">{project.description}</div>
                      {/* <div className="more-link">
                  <a href={project.link}>View project</a>
                  <i className="arrow-icon">→</i>
                </div> */}
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;
