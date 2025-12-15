"use client";

import { useEffect } from "react";
import { useAtom } from "jotai";
import { themeAtom } from "@utils/store";
import tiggleTheme from "@utils/toggle-theme";

const ThemeSwitch = () => {
  const [theme, setTheme] = useAtom(themeAtom);

  useEffect(() => {
    if (localStorage.theme) {
      setTheme(localStorage.theme);
    } else {
      setTheme("auto");
    }
  });

  useEffect(() => {
    console.log("remounted");
  }, []);

  return (
    <select
      value={theme}
      onChange={(e) => {
        setTheme(e.target.value);
        if (e.target.value === "auto") {
          localStorage.removeItem("theme");
        } else localStorage.theme = e.target.value;
        tiggleTheme();
      }}
    >
      <option value="auto">跟随系统</option>
      <option value="dark">深色模式</option>
      <option value="light">浅色模式</option>
    </select>
  );
};

export default ThemeSwitch;
