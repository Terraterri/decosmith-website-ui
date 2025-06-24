import React, { useState } from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("residential");

  // Scroll to top on component mount
  useState(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const residentialItems = [
    {
      id: "living-room",
      title: "Living Room Interior Design",
      image: "assets/images/project/living.jpg",
      tab: "nav-home"
    },
    {
      id: "modular-kitchen",
      title: "Modular Kitchen",
      image: "assets/images/project/kitchen.jpg",
      tab: "nav-profile"
    },
    {
      id: "wardrobe",
      title: "Wardrobe",
      image: "assets/images/project/wordrobe.jpg",
      tab: "nav-ward"
    },
    {
      id: "bedroom",
      title: "Bedroom",
      image: "assets/images/project/bedroom.jpg",
      tab: "nav-bed"
    },
    {
      id: "home-office",
      title: "Home Office",
      image: "assets/images/project/office.jpg",
      tab: "nav-office"
    },
    {
      id: "bathroom",
      title: "Bathroom",
      image: "assets/images/project/bathroom.jpg",
      tab: "nav-bath"
    }
  ];

  const commercialItems = [
    {
      id: "office-space",
      title: "Office Space",
      image: "assets/images/project/officehall.jpg",
      tab: "nav-office-space"
    },
    {
      id: "shopping-malls",
      title: "Shopping Malls",
      image: "assets/images/project/mall.jpg",
      tab: "nav-mall"
    },
    {
      id: "hotels",
      title: "Hotels",
      image: "assets/images/project/hotel.jpg",
      tab: "nav-hotel"
    }
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="section section-padding" id="design-gallery">
      <div className="container">
        <div className="section-title text-center">
          <h2 className="title">
            Design <span>Gallery</span>
          </h2>
        </div>

        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className={`nav-link ${activeTab === "residential" ? "active" : ""}`}
              id="residential-tab"
              type="button"
              role="tab"
              aria-controls="residential"
              aria-selected={activeTab === "residential"}
              onClick={() => handleTabChange("residential")}
            >
              Residential
            </button>
            <button
              className={`nav-link ${activeTab === "commercial" ? "active" : ""}`}
              id="commercial-tab"
              type="button"
              role="tab"
              aria-controls="commercial"
              aria-selected={activeTab === "commercial"}
              onClick={() => handleTabChange("commercial")}
            >
              Commercial
            </button>
          </div>
        </nav>

        <div className="tab-content" id="nav-tabcontent">
          {/* Residential Tab Content */}
          <div
            className={`tab-pane fade ${activeTab === "residential" ? "show active" : ""}`}
            id="residential"
            role="tabpanel"
            aria-labelledby="residential-tab"
            tabIndex="0"
          >
            <div className="residential">
              <div className="row pt-3 justify-content-center">
                {residentialItems.slice(0, 3).map((item) => (
                  <div className="card1 col-lg-4 col-md-6 col-sm-12" key={item.id}>
                    <Link to="/product" state={{ activeTab: item.tab }}>
                      <img src={item.image} alt={item.title} />
                      <div className="contentt">
                        <h3 className="livin">{item.title}</h3>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="row pt-5 justify-content-center">
                {residentialItems.slice(3).map((item) => (
                  <div className="card1 col-lg-4 col-md-6 col-sm-12" key={item.id}>
                    <Link to="/product" state={{ activeTab: item.tab }}>
                      <img src={item.image} alt={item.title} />
                      <div className="contentt">
                        <h3 className="livin">{item.title}</h3>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Commercial Tab Content */}
          <div
            className={`tab-pane fade ${activeTab === "commercial" ? "show active" : ""}`}
            id="commercial"
            role="tabpanel"
            aria-labelledby="commercial-tab"
            tabIndex="0"
          >
            <div className="Commercial">
              <div className="row pt-5 justify-content-center">
                {commercialItems.map((item) => (
                  <div className="card1 col-lg-4 col-md-6 col-sm-12" key={item.id}>
                    <Link to="/commercial" state={{ activeTab: item.tab }}>
                      <img src={item.image} alt={item.title} />
                      <div className="contentt">
                        <h3 className="livin">{item.title}</h3>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;