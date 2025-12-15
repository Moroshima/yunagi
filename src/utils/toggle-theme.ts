export default function toggleTheme() {
  // https://tailwindcss.com/docs/dark-mode#with-system-theme-support
  document.documentElement.classList.toggle(
    "dark",
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        globalThis.matchMedia("(prefers-color-scheme: dark)").matches),
  );
}
