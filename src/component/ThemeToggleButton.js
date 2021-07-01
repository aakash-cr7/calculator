import React, { useEffect, useState } from "react";
import "./ThemeToggleButton.css";

const COLOR_THEME = "colorTheme";

function getThemeFromLocalStorage() {
  return window.localStorage.getItem(COLOR_THEME) || "light";
}

function useDarkMode() {
  const [mode, setMode] = useState(() => getThemeFromLocalStorage());

  useEffect(() => {
    window.localStorage.setItem(COLOR_THEME, mode);

    document.body.dataset.theme = mode;
  }, [mode]);
  return [mode, setMode];
}

const ThemeToggleButton = () => {
  const [mode, setMode] = useDarkMode();

  useEffect(() => {
    document.body.dataset.theme = mode;
  }, [mode]);

  function handleThemeChange(e) {
    setMode(mode === "dark" ? "light" : "dark");
  }

  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        className="toggle-checkbox"
        id="toggle"
        onChange={handleThemeChange}
        defaultChecked={mode === "dark"}
      />
      <label className="toggle-label" htmlFor="toggle">
        <img
          src="https://image.flaticon.com/icons/png/512/581/581601.png"
          className="toggle-icons"
          alt=""
        />
        <img
          src="https://image.flaticon.com/icons/png/512/890/890347.png"
          className="toggle-icons"
          alt=""
        />

        <div className="toggle-ball" />
      </label>
    </div>
  );
};

export default ThemeToggleButton;
