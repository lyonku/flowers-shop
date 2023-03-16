import React, { useState } from "react";

function CarouselItem({ data, position }) {
  return (
    <div className={"carousel-inner " + position}>
      <div className="carousel-item active">
        <div className="container">
          <div className="row p-5">
            <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
              <img className="img-fluid" src={data.img} alt="" />
            </div>
            <div className="col-lg-6 mb-0 d-flex align-items-center">
              <div className="text-align-left align-self-center">
                <h1 className="h1 text-success">{data.name}</h1>
                <h3 className="h2">{data.title}</h3>
                <p>{data.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselItem;
