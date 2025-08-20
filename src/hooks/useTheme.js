import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextInstance.js";

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) throw new Error("UseTheme de um ThemeProvider");
  return context;
}
