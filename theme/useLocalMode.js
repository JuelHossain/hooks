import { useLocalStorage } from "@mantine/hooks";

export default function useLocalMode() {
  const [localMode, setLocalMode] = useLocalStorage({
    key: "theme",
    defaultValue: "",
  });

  return { localMode, setLocalMode };
}
