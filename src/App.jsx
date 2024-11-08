import React, { useState } from "react";
import Book from "./Components/Book";
import "./App.css";

const App = () => {
  const [currentLocation, setCurrentLocation] = useState(1);
  const numOfPapers = 4;
  const maxLocation = numOfPapers + 1;

  const openBook = () => {
    document.getElementById("book").style.transform = "translateX(50%)";
    document.getElementById("prev-btn").style.transform = "translateX(-180px)";
    document.getElementById("next-btn").style.transform = "translateX(180px)";
  };

  const closeBook = (isAtBeginning) => {
    document.getElementById("book").style.transform = isAtBeginning
      ? "translateX(0%)"
      : "translateX(100%)";
    document.getElementById("prev-btn").style.transform = "translateX(0px)";
    document.getElementById("next-btn").style.transform = "translateX(0px)";
  };

  const goNextPage = () => {
    if (currentLocation < maxLocation) {
      switch (currentLocation) {
        case 1:
          openBook();
          break;
        case 2:
          break;
        case 3:
          break;
        case 4:
          closeBook(false);
          break;
        default:
          throw new Error("Unknown state");
      }
      setCurrentLocation(currentLocation + 1);
    }
  };

  const goPrevPage = () => {
    if (currentLocation > 1) {
      switch (currentLocation) {
        case 2:
          closeBook(true);
          break;
        case 3:
          break;
        case 4:
          break;
        case 5:
          openBook();
          break;
        default:
          throw new Error("Unknown state");
      }
      setCurrentLocation(currentLocation - 1);
    }
  };

  return (
    <div className="App">
      <Book
        currentLocation={currentLocation}
        goNextPage={goNextPage}
        goPrevPage={goPrevPage}
      />
    </div>
  );
};

export default App;
