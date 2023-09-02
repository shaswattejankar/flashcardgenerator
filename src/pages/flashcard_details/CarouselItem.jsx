import React from "react";

const CarouselItem = ({ci ,cd})=>{
    return(
        <div className="item" >
            <img className="carousel-img" src={ci} alt="nothing to show mf" />
            <div className="carousel-item-text">{cd}</div>
        </div>
    )
};

export default CarouselItem