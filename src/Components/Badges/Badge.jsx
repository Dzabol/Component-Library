import React from "react";

// Style
import "../../CSS/Components/Colors.css";
import "../../CSS/Components/Badge.css";

export default function Badges({
  children,
  onClick = () => {},
  type = "Square",
  color = "Gray",
}) {
  function checkPossibielietes(toCheck, avaiablePossibielietes) {
    let inputLowerCase = toCheck.toLocaleLowerCase();
    let correctdName =
      inputLowerCase[0].toLocaleUpperCase() + inputLowerCase.slice(1);
    let isCorrect = avaiablePossibielietes.includes(correctdName);

    return isCorrect ? correctdName : avaiablePossibielietes[0];
  }

  // Combinations
  const avaiableColors = [
    "Gray",
    "Red",
    "Yellow",
    "Green",
    "Blue",
    "Indigo",
    "Purple",
    "Pink",
  ];

  const avaiableShapes = ["Square", "Pill"];

  // Set values
  const styleColor = checkPossibielietes(color, avaiableColors);
  const badgeShape = checkPossibielietes(type, avaiableShapes);

  const style = {
    color: `var(--text-${styleColor})`,
    backgroundColor: `var(--backGroun-${styleColor})`,
  };

  return (
    <div className={`badge ${badgeShape}`} style={style} onClick={onClick}>
      {children}
    </div>
  );
}
