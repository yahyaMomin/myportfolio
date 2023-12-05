import { useState, useEffect } from "react";
import { FaMoon, FaRegSun } from "react-icons/fa6";

const Theme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    window.localStorage.setItem("theme", newTheme);
  };

  return <div onClick={toggleTheme}>{theme === "dark" ? <FaRegSun /> : <FaMoon />}</div>;
};

export default Theme;
