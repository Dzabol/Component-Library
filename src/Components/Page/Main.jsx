import React from "react";
import { ThemeContext } from "../../App";

export default function Main({ ...rest }) {
  const theme = React.useContext(ThemeContext);
  return (
    <div className={`main-theme-${theme}`}>
      <h1>MAIN</h1>
    </div>
  );
}
