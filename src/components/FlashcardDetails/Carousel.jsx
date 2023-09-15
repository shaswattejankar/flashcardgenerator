import React from "react";
import "./Carousel.css";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { nanoid } from "@reduxjs/toolkit";

// To rendering each image and definition for the selected Term
const CarouselItem = ({ ci, cd }) => {
  return (
    <div className="item" key={nanoid()}>
      <div className="car-img-div">
        <img className="carousel-img" src={ci} alt="No Image Provided" />
      </div>
      <div className="card-text-div">
        <div className="carousel-item-text">{cd}</div>
      </div>
    </div>
  );
};

// To render and control the data rendered in the Carousel
const Carousel = ({ termList, activeIndex, setActiveIndex }) => {
  const items = termList;

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = items.length - 1;
    } else if (newIndex >= items.length) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {items.map((item) => {
          return <CarouselItem ci={item.termImage} cd={item.termDef} />;
        })}
      </div>
      {/* Navigation Buttons */}
      <div className="carousel-buttons">
        <button
          onClick={() => updateIndex(activeIndex - 1)}
          className="button-arrows"
        >
          <MdOutlineArrowBackIosNew />
        </button>
        <div className="indicators">
          {activeIndex + 1}/{items.length}
        </div>
        <button
          onClick={() => updateIndex(activeIndex + 1)}
          className="button-arrows"
        >
          <MdOutlineArrowForwardIos />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
