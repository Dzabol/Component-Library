import React from "react";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { ThemeContext } from "../../App";

export default function Header({ children, ...rest }) {
  const theme = React.useContext(ThemeContext);

  const currentThemeName = theme[0].toUpperCase() + theme.slice(1);

  return (
    <div className={`header-theme-${theme}`}>
      <h1>{children}</h1>

      <div className="theme-button">
        {`${currentThemeName} mode`}
        {theme === "dark" ? <BsToggleOff /> : <BsToggleOn />}
      </div>
    </div>
  );
}
