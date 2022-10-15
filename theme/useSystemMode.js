import { useEffect, useState } from "react";
import useLocalTheme from "./useLocalMode";

export default function useSystemMode() {
  // local them setter function.
  const { setLocalMode } = useLocalTheme();

  // checking system dark or not
  const darkMode = window.matchMedia("(prefers-color-scheme: dark)");

  // choosing default theme.
  const mode = darkMode.matches ? "dark" : "light";

  const [systemMode, setSystemMode] = useState(mode);

  useEffect(() => {
    // changing theme on change of system theme.
    const changeMode = (e) => {
      const newMode = e.matches ? "dark" : "light";
      setLocalMode(newMode);
      setSystemMode(newMode);
    };

    // listening to system dark or not.
    darkMode.addEventListener("change", changeMode);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return systemMode;
}
