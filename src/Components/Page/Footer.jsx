import React from "react";
import { ThemeContext } from "../../App";

// Styleing
import "../../CSS/Footer.css";

export default function Footer({ ...rest }) {
  const { theme } = React.useContext(ThemeContext);
  return (
    <div className={`footer-theme-${theme}`}>
      <span className="copyright-text">@copyright Sebastian Jablecki 2023</span>
    </div>
  );
}
