import React from "react";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { ThemeContext } from "../../App";

import "../../CSS/Header.css";

export default function Header({ children, ...rest }) {
  const { theme, toggleOn } = React.useContext(ThemeContext);

  const currentThemeName = theme[0].toUpperCase() + theme.slice(1);

  return (
    <header className={`header-theme-${theme}`}>
      <h1>{children}</h1>
      <div onClick={toggleOn} className={"theme-button-container"}>
        <span>{`${currentThemeName} mode`}</span>
        {theme === "dark" ? <BsToggleOff /> : <BsToggleOn />}
      </div>
    </header>
  );
}
