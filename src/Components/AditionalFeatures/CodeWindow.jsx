import React, { useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import useToogle from "../../hooks/useToggle";

// Code theme
import {
  docco,
  atomOneDark,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

// Icons
import { BsClipboard, BsCheck } from "react-icons/bs";

// CSS
import "../../CSS/Components/CodeWindowCSS.css";

//context
import { ThemeContext } from "../../App";

export default function CodeWindow({
  children,
  name = "",
  URL = "",
  language = "javascript",
}) {
  const { theme } = React.useContext(ThemeContext);
  const currentTheme =
    theme === "dark"
      ? {
          headerColor: "",
          fontColor: "",
          codeWindow: atomOneDark,
          borderTheme: "codeWindow-BorderLine-Dark",
        }
      : {
          headerColor: "codeHeader-light",
          fontColor: "font-header-light",
          codeWindow: docco,
          borderTheme: "codeWindow-BorderLine-Light",
        };

  const [isCoppier, updateIsCoppier] = useToogle({ initialValue: false });
  const [codeString, setCode] = React.useState("");

  useEffect(() => {
    if (!URL === "") {
      const text = children.toString();
      setCode(text);
    }
  }, []);

  //   Functions
  function handleCopieClick() {
    navigator.clipboard.writeText(codeString);
    updateIsCoppier();
    setTimeout(() => {
      updateIsCoppier(false);
    }, 3000);
  }

  function getFileContent(fileAdress) {}

  return (
    <div className={`codeWindow-mainContainer ${currentTheme.borderTheme}`}>
      <div className={`codeHeader-container ${currentTheme.headerColor}`}>
        <p className={`font-header ${currentTheme.fontColor}`}>{name}</p>
        <button
          className={`font-header ${currentTheme.fontColor} copyButton`}
          onClick={handleCopieClick}
        >
          <span>{isCoppier ? <BsCheck /> : <BsClipboard />}</span>
          {isCoppier ? "Copied" : "Copy"}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={currentTheme.codeWindow}
        customStyle={{ padding: "1em" }}
        wrapLongLines={true}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}
