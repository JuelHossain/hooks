import { useEffect, useState } from "react";
import useLocalMode from "./useLocalMode";
import useSystemTheme from "./useSystemMode";

export default function useThemeMode() {
  // local theme of the user
  const { localMode, setLocalMode } = useLocalMode();

  // system theme
  const systemTheme = useSystemTheme();

  // this will be the main theme.
  const [mode, setMode] = useState(localMode || systemTheme);

  // theme setter function sets themes everywhere.
  const setGlobalTheme = (value) => {
    // setting main theme
    setMode(value);
    // setting root class
    if (value === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };

  // setting theme based on user theme.
  useEffect(() => {
    setGlobalTheme(localMode || systemTheme);
  }, [localMode, systemTheme]);

  // setting theme base on user choice..
  const toggleMode = () => {
    setLocalMode((pTheme) => (pTheme === "dark" ? "light" : "dark"));
  };
  return { mode, toggleMode };
}
