import React from "react";

export const themes = {
  light: {
    background_color: "EDF6F9",
    cards: "card-theme-light",
    banner_gradient: "light3",
    navbar_color: "headroom-light-theme",
    titles_color: "",
    text_color: "",
  },
  dark: {
    background_color: "171719",
    cards: "card-theme-dark",
    banner_gradient: "dark6",
    navbar_color: "headroom-dark-theme",
    titles_color: "light2",
    text_color: "light2",
  },
};

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});
