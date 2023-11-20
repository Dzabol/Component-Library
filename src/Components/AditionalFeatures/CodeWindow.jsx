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
  fromTxt = false,
  name = "",
  url,
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
  const [codeString, setCode] = React.useState(null);
  let codeText = "";

  useEffect(() => {
    const modulePath = import.meta.url;
    const relativePath = url;
    const absolutePath = new URL(relativePath, modulePath).pathname;

    const loadFileContent = async () => {
      try {
        let response;

        if (fromTxt) {
          response = await fetch(absolutePath);
        } else {
          const fileModule = await import(absolutePath);
          response = new Response(fileModule.default, { status: 200 });
        }

        if (response.ok) {
          const fileContent = await response.text();
          codeText = fileContent.toString();
          setCode(codeText);
        }
      } catch (error) {
        console.error("Error during file loading", error);
        setCode(`Failed to load file: ${error.message.toString()}`);
      }
    };

    if (!url) {
      setCode(children);
    } else {
      loadFileContent();
    }
  }, [url, children]);

  //   Functions
  function handleCopieClick() {
    navigator.clipboard.writeText(codeString);
    updateIsCoppier();
    setTimeout(() => {
      updateIsCoppier(false);
    }, 3000);
  }

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
      <div className="codeContainer">
        <SyntaxHighlighter
          language={language}
          style={currentTheme.codeWindow}
          customStyle={{
            padding: "1em",
            width: "100%",
            height: "100%",
          }}
          wrapLongLines={true}
          showLineNumbers={true}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
