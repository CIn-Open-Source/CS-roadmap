import React, { useContext } from "react";
import { ThemeContext, themes } from "./theme-context";
import { NavLink, UncontrolledTooltip } from "reactstrap";


function ThemeTogglerButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <NavLink className="nav-link-icon" id="tooltip112445447" target="_blank">
        <span className="clearfix" />
        <label className="custom-toggle">
          <input defaultChecked type="checkbox" />
          <span
            className="custom-toggle-slider rounded-circle"
            onClick={() => {
              theme === themes.light
                ? toggleTheme(themes.dark)
                : toggleTheme(themes.light);
            }}
          />
        </label>
      </NavLink>

      <UncontrolledTooltip delay={0} target="tooltip112445447">
        Ligar/Desligar modo escuro
      </UncontrolledTooltip>
    </>
  );
}

export default ThemeTogglerButton;
