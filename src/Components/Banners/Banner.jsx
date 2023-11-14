import React from "react";

// Icons
import {
  BsFillCheckCircleFill,
  BsFillExclamationTriangleFill,
  BsFillXCircleFill,
  BsInfoCircleFill,
  BsXLg,
} from "react-icons/bs";

//Style
import "../../CSS/Components/Colors.css";
import "../../CSS/Components/Banners.css";

export default function Banner({
  children,
  variant = "banner",
  type = "success",
  delay = null,
  tytle,
}) {
  //Variables
  const avaiableVariants = ["banner", "toast", "tip"];

  const avaiableTypes = [
    {
      type: "success",
      icon: BsFillCheckCircleFill,
      color: "Green",
      iconColor: "#34D399",
    },
    {
      type: "warning",
      icon: BsFillExclamationTriangleFill,
      color: "Yellow",
      iconColor: "#FBBF24",
    },
    {
      type: "error",
      icon: BsFillXCircleFill,
      color: "Red",
      iconColor: "#F87171",
    },
    {
      type: "neutral",
      icon: BsInfoCircleFill,
      color: "Blue",
      iconColor: "#60A5FA",
    },
  ];

  //Functions
  const userSelection = (userType, arrayWithAvaiableVariants) => {
    return arrayWithAvaiableVariants.find(
      (avaiableType) =>
        avaiableType.type.toUpperCase() === userType.toUpperCase()
    );
  };

  const variantSelection = (userType, arrayWithAvaiableVariants) => {
    return arrayWithAvaiableVariants.find(
      (avaiableType) => avaiableType.toUpperCase() === userType.toUpperCase()
    );
  };

  //Final
  let chosenType = userSelection(type, avaiableTypes);
  let chosenVatiant = variantSelection(variant, avaiableVariants);

  if (!chosenType || !chosenVatiant) {
    chosenType = userSelection("Error", avaiableTypes);
    tytle = "Plese check input data";
    variant = "banner";
  }

  const style = {
    color: `var(--text-${chosenType.color})`,
    backgroundColor: `var(--backGroun-${chosenType.color})`,
  };

  return (
    <div>
      <div className="banner-mainContainer" style={style}>
        <div className="icon-container" style={{ color: chosenType.iconColor }}>
          <chosenType.icon />
        </div>
        <div className="text-container">
          <h1 className="banner-tytle">
            {tytle
              ? tytle
              : chosenType.type.charAt(0).toUpperCase() +
                chosenType.type.slice(1)}
          </h1>
          {children ? <p className="banner-content">{children}</p> : null}
        </div>
        <BsXLg />
      </div>
      <div
        className="triangle"
        style={{
          color: `var(--backGroun-${chosenType.color})`,
          display: "none",
        }}
      ></div>
    </div>
  );
}
