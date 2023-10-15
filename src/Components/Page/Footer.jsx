import React from "react";
import { ThemeContext } from "../../App";

export default function Footer({ ...rest }) {
  const theme = React.useContext(ThemeContext);
  return (
    <div className={`footer-theme-${theme}`}>
      <h1>Footer</h1>
    </div>
  );
}
