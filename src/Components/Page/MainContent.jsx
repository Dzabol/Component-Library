import React from "react";

//Components
import Badge from "../Badges/Badge";

//Style

//context
import { ThemeContext } from "../../App";

export default function MainContent({ ...rest }) {
  const { theme } = React.useContext(ThemeContext);
  return (
    <div className={`main-theme-${theme}`}>
      <div className="main-content">
        <h1>Main</h1>
        <Badge type="Square" color="yellow">
          Gray - Square
        </Badge>
      </div>
    </div>
  );
}
