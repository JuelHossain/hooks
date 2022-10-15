import { useMantineTheme } from "@mantine/core";
import { useEffect } from "react";
import manTailColors from "../colors";

import setRootColor from "../tailwind/setRootColor";
import useThemeMode from "./useThemeMode";

export default function useTheme(preferences) {
  const { mode } = useThemeMode();
  const { colors } = useMantineTheme();

  useEffect(() => {
    const mixedColors = { ...colors, ...manTailColors, ...preferences.colors };
    setRootColor(mixedColors);
  }, [preferences, colors]);

  const theme = {
    colorScheme: mode,
    colors: manTailColors,
    ...preferences,
  };
  return theme;
}
