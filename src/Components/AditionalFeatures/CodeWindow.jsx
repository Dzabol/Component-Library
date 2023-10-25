import React from "react";
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
  name = "Test",
  URL,
  language = "javascript",
}) {
  const { theme } = React.useContext(ThemeContext);
  const currentTheme = theme === "dark" ? atomOneDark : docco;
  const [isCoppier, updateIsCoppier] = useToogle({ initialValue: false });

  const codeString = `import SyntaxHighlighter from "react-aaaaaaaaaaaaaaaaaaaaasyntax-highlighter";`;

  function handleCopieClick() {
    navigator.clipboard.writeText(codeString);
    updateIsCoppier();
    setTimeout(() => {
      updateIsCoppier(false);
    }, 3000);
  }

  return (
    <div className="codeWindow-mainContainer">
      <div className="codeHeader-container">
        <p className="font-header">{name}</p>
        <button className="font-header copyButton" onClick={handleCopieClick}>
          <span>{isCoppier ? <BsCheck /> : <BsClipboard />}</span>
          {isCoppier ? "Copied" : "Copy"}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={currentTheme}
        customStyle={{ padding: "1em" }}
        wrapLongLines={true}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}
