import React from "react";
import { Link } from "react-router-dom";
import { AiFillProject } from "react-icons/ai";
import { GiSofa } from "react-icons/gi";
import { GiCeilingLight } from "react-icons/gi";
import { FaPaintRoller } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { SiBlueprint } from "react-icons/si";
import { useMediaQuery } from "react-responsive";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Services = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const services = [
    {
      title: "Concept Development",
      image: "assets/images/service/service1.jpg",
      description:
        "We offer a range of services to enhance the aesthetic appeal, functionality, and ambiance of your spaces.",
    },
    {
      title: "Project Management",
      image: "assets/images/service/service2.jpg",
      description:
        "Oversee and coordinate all aspects from concept to implementation, ensuring deadlines and budgets are met.",
    },
    {
      title: "Furniture & Fixture Selection",
      image: "assets/images/service/service3.jpg",
      description:
        "Help clients select furniture and accessories that match the design. We also offer custom furniture design.",
    },
    {
      title: "Lighting Design",
      image: "assets/images/service/service4.jpg",
      description:
        "Plan and select lighting solutions to improve the function and mood of the space.",
    },
    {
      title: "Renovation & Remodelling",
      image: "assets/images/service/service5.jpg",
      description:
        "Manage renovations including structural changes to transform spaces per the design plan.",
    },
    {
      title: "Art & Accessories Procurement",
      image: "assets/images/service/service6.jpg",
      description:
        "Assist in selecting and buying artwork and accessories to complete the design.",
    },
    {
      title: "Virtual Design Services",
      image: "assets/images/service/service7.jpg",
      description:
        "Provide virtual consultations, room planning, and remote design services for convenience.",
    },
  ];

  const responsive = {
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
      partialVisibilityGutter: 20,
    },
  };

  return (
    <>

      <nav aria-label="breadcrumb mt-5 mb-5">
        <ol className="breadcrumb">
          {/* <li className="breadcrumb-item">
            <a href="/">Home </a>
          </li>
          <li className="breadcrumb-item">
            <a href="/services"> / Services</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            / Data
          </li> */}
        </ol>
      </nav>
      <div className="section section-paddingg wrapper carusel-cards">
        <div className="container">
          <div className="service-head pt-5 mt-5">
            <h2 className="title text-center allTitle text-uppercase">
              Our Services
            </h2>
            <p className="text-center pb-2">
              Decosmith offers a range of services to enhance your space's
              aesthetic and function.
            </p>
          </div>

          {isMobile ? (
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              arrows={true}
            >
              {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="card">
                  <div className="poster">
                    <h1>{service.title}</h1>
                    <img src={service.image} alt={service.title} />
                  </div>
                  <div className="details">
                    <h1>{service.title}</h1>
                    <p className="desc">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
        </Carousel>
        ) : (
        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <div className="poster">
                  <h1>{service.title}</h1>
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="details">
                  <h1>{service.title}</h1>
                  <p className="desc">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
          )}
      </div>
    </div >


    </>
  );
};

export default Services;
