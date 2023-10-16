import React from "react";

// Style
import "../../CSS/Components/Colors.css";
import "../../CSS/Components/Badge.css";

export default function Badges({
  children,
  onClick = () => {},
  type = "square",
  color = "Gray",
}) {
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

  const styleColor = ((color, avaiableColors) => {
    let inputLowerCase = color.toLocaleLowerCase();
    let correctdName =
      inputLowerCase[0].toLocaleUpperCase() + inputLowerCase.slice(1);
    let isCorrect = avaiableColors.includes(correctdName);

    return isCorrect ? correctdName : avaiableColors[0];
  })(color, avaiableColors);

  const style = {
    color: `var(--text-${styleColor})`,
    backgroundColor: `var(--backGroun-${styleColor})`,
  };

  return (
    <div className={`badge ${type}`} style={style} onClick={onClick}>
      {children}
    </div>
  );
}
