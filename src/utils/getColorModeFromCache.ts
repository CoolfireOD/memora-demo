export const getColorModeFromCache: () => "light" | "dark" | null = () => {
  const localStorageItem = localStorage.getItem("mode") as
    | "light"
    | "dark"
    | null;
  return localStorageItem;
};
