import React, { useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import "./FlashcardDetailsPage.css";
import { FaArrowLeft } from "react-icons/fa";
import Carousel from "./Carousel";
import CenterModal from "./centerModal";

// Page 3: To show details of a particular flashcard group
function FlashcardDetailsPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const location = useLocation();
  const flashcard = location.state?.id;

  // For rendering all the term names of the flashcard
  const term_name_list = flashcard.flash.termList.map((each_term, index) => (
    <a
      className={`list-group-item list-group-item-action ${
        index === activeIndex ? "active" : ""
      }`}
      data-toggle="list"
      role="tab"
      // for carousel data navigation
      onClick={() => setActiveIndex(index)}
      key={index}
    >
      {each_term.termName}
    </a>
  ));

  return (
    <section>
      {/* for flashcard group details */}
      <div className="container info">
        <div className="d-flex flex-row justify-content-start heading-container">
          <div className="p-2">
            <Link to="/flashes">
              <button className="button">
                <FaArrowLeft />
              </button>
            </Link>
          </div>
          <div className="p-2 g">
            <h4>{flashcard.flash.groupName}</h4>
            <br />
            {flashcard.flash.groupDesc}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="d-flex flex-row justify-content-center flex-wrap align-self-start content">
          <div className="col col-left col-sm-6 shadow-sm styler">
            <div className="row d-flex flex-column flex-item align-items-start">
              <div className="row row-1">
                <b>Flaschards</b>
              </div>
              <div className="row row-2">
                <div className="list-group list-group-flush" role="tablist">
                  {term_name_list}
                </div>
              </div>
            </div>
          </div>

          {/* Carousel goes here */}
          <div className="col col-mid col-sm-6 shadow-sm styler car-styler">
            <div className="d-flex justify-content-center flex-column align-items-center carousel-flex">
              <Carousel
                termList={flashcard.flash.termList}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            </div>
          </div>

          {/* link copy button goes here */}
          <div className="col d-flex flex-column col-right">
            <div className="d-flex flex-item shadow-sm util-section">
              <div className="d-flex align-items-center justify-content-center">
                <CenterModal />
              </div>
            </div>

            {/* download button goes here */}
            <div className="d-flex flex-item shadow-sm util-section">
              <div className="d-flex align-items-center justify-content-center">
                <button
                  className="util-button"
                  variant="btn btn-primary primary "
                >
                  Download
                </button>
              </div>
            </div>

            {/* print button goes here */}
            <div className="d-flex flex-item shadow-sm util-section">
              <div className="d-flex align-items-center justify-content-center">
                <button
                  className="util-button"
                  variant="btn btn-primary primary "
                >
                  Print
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/flashes" element={<FlashcardDetailsPage />} />
      </Routes>
    </section>
  );
}
export default FlashcardDetailsPage;
