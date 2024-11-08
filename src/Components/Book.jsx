import React from "react";
import Page from "./Page";
import "./Book.css";

import front1 from "../assests/f1.jpg";
import back1 from "../assests/b1.jpg";
import front2 from "../assests/f2.jpg";
import back2 from "../assests/b2.jpg";
import front3 from "../assests/f3.jpg";
import back3 from "../assests/b3.jpg";
import front4 from "../assests/f4.jpg";
import back4 from "../assests/b4.jpg";

const pages = [
  { front: front1, back: back1 },
  { front: front2, back: back2 },
  { front: front3, back: back3 },
  { front: front4, back: back4 },
];

const Book = ({ currentLocation, goNextPage, goPrevPage }) => {
  return (
    <div className="book-container">
      <button id="prev-btn" onClick={goPrevPage}>
        &lt;
      </button>
      <div id="book" className="book">
        {pages.map((images, index) => (
          <Page
            key={index + 1}
            pageNumber={index + 1}
            currentLocation={currentLocation}
            frontImage={images.front}
            backImage={images.back}
          />
        ))}
      </div>

      <button id="next-btn" onClick={goNextPage}>
        &gt;
      </button>
    </div>
  );
};

export default Book;
