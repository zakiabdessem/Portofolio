import "../../App.css";
import React, { useState } from "react";
import Header from "../Layout/Header";
import Navbar from "../Layout/Navbar";

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prevState) => !prevState);

  return [isDark, toggleTheme];
};

export default function Layout({ children }) {
  const [isDark, toggleTheme] = useDarkMode();

  const backgroundColor = isDark ? "#17182c" : "#fff";
  const textColor = isDark ? "white" : "black";

  return (
    <>
      <Header />
      <style>
        {`
        body {
            background-color: ${backgroundColor} ;
          }
        __text {
        color: ${textColor}
        }
        `}
      </style>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
