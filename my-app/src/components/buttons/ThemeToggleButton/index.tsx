import React , { useEffect } from "react";
import clsx from "clsx";
import { useThemeStore } from "../../../structure/theme/store/store";
import { MdOutlineLightMode } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import { ButtonUI } from "../style";

function ThemeToggleButton() {
  const { isDark, toggleTheme } = useThemeStore();
  useEffect(() => {
    document.body.className = clsx({ dark: isDark });
  }, [isDark]);

  return (
    <ButtonUI onClick={toggleTheme}>
      {isDark ? (<MdOutlineLightMode />) : (<FaRegMoon />)}
    </ButtonUI>
  );
}

export default ThemeToggleButton;
