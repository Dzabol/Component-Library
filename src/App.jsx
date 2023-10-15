import React from "react";
import { useState } from "react";
import Header from "./Components/Page/Header";
import Main from "./Components/Page/Main";
import Footer from "./Components/Page/Footer";
import "./CSS/App.css";

const ThemeContext = React.createContext();

export default function App() {
  let theme = "dark";

  return (
    <ThemeContext.Provider value={theme}>
      <Header>Component Library</Header>
      <Main />
      <Footer />
    </ThemeContext.Provider>
  );
}

export { ThemeContext };
