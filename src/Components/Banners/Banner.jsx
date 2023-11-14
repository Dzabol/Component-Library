import React from "react";
import { useState, useEffect } from "react";

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
  variant = "toast",
  type = "success",
  delay = 5000,
  tytle,
}) {
  //Variables
  const [visibility, updateVisibilityState] = useState("");
  const [hasExecuted, setHasExecuted] = useState(false);

  const avaiableVariants = ["banner", "toast", "tip"];

  const avaiableTypesBannersAndToast = [
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

  const changeVisisibility = () => {
    if (visibility === "") {
      updateVisibilityState("none");
    } else {
      updateVisibilityState("");
    }
  };

  //Final
  let chosenType = userSelection(type, avaiableTypesBannersAndToast);
  let chosenVatiant = variantSelection(variant, avaiableVariants);

  if (!chosenType || !chosenVatiant) {
    chosenType = userSelection("Error", avaiableTypesBannersAndToast);
    tytle = "Plese check input data";
    variant = "banner";
  }

  //Close toast
  useEffect(() => {
    if (variant === "toast" && !hasExecuted) {
      setTimeout(() => {
        changeVisisibility();
        setHasExecuted(true);
      }, delay);
    }
  }, [hasExecuted, delay, variant]);

  //Custom styles
  const mainStyle = {
    color: `var(--text-${chosenType.color})`,
    backgroundColor: `var(--backGroun-${chosenType.color})`,
  };

  const tipTriangleStyle = {
    color: `var(--backGroun-${chosenType.color})`,
    display: `${variant === "tip" ? "" : "none"}`,
  };

  const tipIconStyle = {
    display: `${variant === "tip" ? "" : "none"}`,
  };

  return (
    <div
      style={{ display: visibility }}
      onClick={variant === "toast" ? changeVisisibility : () => {}}
    >
      <div className="banner-mainContainer" style={mainStyle}>
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
        <div
          className="exit-btn"
          style={tipIconStyle}
          onClick={changeVisisibility}
        >
          <BsXLg />
        </div>
      </div>
      <div className="triangle" style={tipTriangleStyle}></div>
    </div>
  );
}
