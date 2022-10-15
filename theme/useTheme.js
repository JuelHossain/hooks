import { useMantineTheme } from "@mantine/core";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useEffect } from "react";
import manTailColors from "../colors";

import setRootColor from "../tailwind/setRootColor";
import useThemeMode from "./useThemeMode";

export default function useTheme(preferences) {
  const { mode } = useThemeMode();
  const { colors } = useMantineTheme();
  // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    const mixedColors = { ...colors, ...manTailColors, ...preferences.colors };
    setRootColor(mixedColors);
  }, [colors, preferences]);

  const theme = {
    colorScheme: mode,
    colors: manTailColors,
    ...preferences,
  };
  return theme;
}
