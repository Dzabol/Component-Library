import React from "react";

//Components
import { ComponentBox, BoxMainContent } from "../ComponentBox/index";
import CodeWindow from "../AditionalFeatures/CodeWindow";

//Style
import Badge from "../Badges/Badge";

//context
import { ThemeContext } from "../../App";

export default function MainContent({ ...rest }) {
  const { theme } = React.useContext(ThemeContext);

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

  return (
    <div className={`main-theme-${theme}`}>
      <div className="main-content">
        <ComponentBox>
          <ComponentBox.Name>BADGES</ComponentBox.Name>
          <ComponentBox.BoxMainContent>
            <BoxMainContent.Name>SQUARE</BoxMainContent.Name>
            <BoxMainContent.Items>
              {avaiableColors.map((color) => {
                return (
                  <Badge key={color} type="Square" color={color}>
                    {`${color}- Square`}
                  </Badge>
                );
              })}
            </BoxMainContent.Items>
          </ComponentBox.BoxMainContent>

          <ComponentBox.BoxMainContent>
            <BoxMainContent.Name>Pill</BoxMainContent.Name>
            <BoxMainContent.Items>
              {avaiableColors.map((color) => {
                return (
                  <Badge key={color} type="Pill" color={color}>
                    {`${color}- Pill`}
                  </Badge>
                );
              })}
            </BoxMainContent.Items>
          </ComponentBox.BoxMainContent>
          <CodeWindow name="CSS" url="aaa">
            Code Example
          </CodeWindow>
        </ComponentBox>
      </div>
    </div>
  );
}
