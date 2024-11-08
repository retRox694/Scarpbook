import React from "react";
import "./Page.css";

const Page = ({ pageNumber, currentLocation, frontImage, backImage }) => {
  const isFlipped = pageNumber < currentLocation;
  const isCurrent = pageNumber === currentLocation;

  return (
    <div
      id={`p${pageNumber}`}
      className={`paper ${isFlipped ? "flipped" : ""} ${
        isCurrent ? "current" : ""
      }`}
    >
      <div className="front">
        <div id={`f${pageNumber}`} className="front-content">
          <img id="imgFront" src={frontImage} alt={`Front ${pageNumber}`} />
        </div>
      </div>
      <div className="back">
        <div id={`b${pageNumber}`} className="back-content">
          <img id="imgBack" src={backImage} alt={`Back ${pageNumber}`} />
        </div>
      </div>
    </div>
  );
};

export default Page;
