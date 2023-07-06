import { useAlert } from "react-alert";
import "./TypedBox.css";
import { useState, useEffect } from "react";

const TypedBox = (props) => {
  const { boxName, color, currentIndex, goToPrevious, goToNext, children } =
    props;

  const typedStyle = {
    border: `10px solid ${color}`,
  };

  console.log(currentIndex);

  return (
    <div style={typedStyle} className="typedBox">
      <h1>{boxName}</h1>
      <div className="typedBoxelem">{children[currentIndex]}</div>

      <span className="buttons">
        <button onClick={goToPrevious}>{`< --`}</button>
        <button onClick={goToNext}>{`-- >`}</button>
      </span>
    </div>
  );
};

export default TypedBox;
