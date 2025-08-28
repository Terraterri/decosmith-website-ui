import React, { useState } from "react";
import { Link } from "react-router-dom";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  const [openIndex, setOpenIndex] = useState(0);


  return (
    <div className="Box-block">
      <button
        className="flex justify-between items-center w-full py-3 text-left text-lg font-medium"
        onClick={onClick}
      >
        {title}
        <span className="text-xl">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="cont_faq">
          {content}
        </div>
      )}
    </div>
  );
};

const Accordion = ({ items }) => {
  // Open the first item (index 0) by default
  const [openIndex, setOpenIndex] = useState(0);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

const CaseStudies = () => {
  // Example case study accordion items
  const caseStudyItems = [
    {
      title: "Luxury Apartment Renovation",
      content:
        "We transformed a 3BHK apartment into a modern luxury space with smart storage and elegant interiors.",
    },
    {
      title: "Office Workspace Revamp",
      content:
        "Designed a collaborative office with open seating, creative breakout zones, and sustainable materials.",
    },
    {
      title: "Villa Interior Transformation",
      content:
        "Executed a complete villa makeover with minimalistic design and eco-friendly decor.",
    },
  ];

  return (
    <>
      <div className="section section-padding pt-0 Case-studi">
        <div className="container">
          <div className="section-title text-center mb-lg-9 mb-md-7 mb-5">
            <h2 className="title text-uppercase">CASE STUDIES</h2>
          </div>

          {/* Accordion Section */}
          <Accordion items={caseStudyItems} />
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
