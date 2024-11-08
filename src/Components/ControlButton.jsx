import React from "react";

const ControlButton = ({ direction, onClick }) => {
  return (
    <button id={`${direction}-btn`} onClick={onClick}>
      {direction === "prev" ? "◀️" : "▶️"}
    </button>
  );
};

export default ControlButton;
