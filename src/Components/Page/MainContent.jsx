import React from "react";

//Components
import { ComponentBox, BoxMainContent } from "../ComponentBox/index";
import CodeWindow from "../AditionalFeatures/CodeWindow";
import Banner from "../Banners/Banner";

//Style
import "../../CSS/MainContent.css";
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

          <BoxMainContent.Code>
            <CodeWindow
              name="CSS - colors"
              language="CSS"
              url="../../CSS/Components/Colors.css"
            />

            <CodeWindow
              name="CSS"
              language="CSS"
              url="../../CSS/Components/Badge.css"
            />

            <CodeWindow
              name="JSX"
              language="javascript"
              fromTxt={true}
              url="./Badges.txt"
            />
          </BoxMainContent.Code>
        </ComponentBox>

        <ComponentBox>
          <ComponentBox.Name>BANNERS</ComponentBox.Name>
          <ComponentBox.BoxMainContent>
            <BoxMainContent.Name>SUCCESS</BoxMainContent.Name>
            <BoxMainContent.Items>
              <Banner type="success" tytle="Congratulations !">
                Yes, you made it !!!
              </Banner>
            </BoxMainContent.Items>
          </ComponentBox.BoxMainContent>

          <ComponentBox.BoxMainContent>
            <BoxMainContent.Name>WARNING</BoxMainContent.Name>
            <BoxMainContent.Items>
              <Banner type="Warning" tytle="Attention !">
                This time you where lucky
              </Banner>
            </BoxMainContent.Items>
          </ComponentBox.BoxMainContent>

          <ComponentBox.BoxMainContent>
            <BoxMainContent.Name>ERROR</BoxMainContent.Name>
            <BoxMainContent.Items>
              <Banner type="error">Ups...</Banner>
            </BoxMainContent.Items>
          </ComponentBox.BoxMainContent>

          <ComponentBox.BoxMainContent>
            <BoxMainContent.Name>NEUTRAL</BoxMainContent.Name>
            <BoxMainContent.Items>
              <Banner type="neutral" tytle="Update avaiable">
                there is new update
              </Banner>
            </BoxMainContent.Items>
          </ComponentBox.BoxMainContent>
        </ComponentBox>
      </div>
    </div>
  );
}
