import React from "react";
import { useState } from "react";
import useToogle from "./hooks/useToggle";

// Components
import Header from "./Components/Page/Header";
import MainContent from "./Components/Page/MainContent";
import Footer from "./Components/Page/Footer";

// Styleing
import "./CSS/App.css";

const ThemeContext = React.createContext();

export default function App() {
  const [on, toggleOn] = useToogle({ initialValue: true });
  let theme = on ? "dark" : "light";

  return (
    <ThemeContext.Provider value={{ theme, toggleOn }}>
      <div className="page-border">
        <Header>Component Library</Header>
        <MainContent />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export { ThemeContext };
