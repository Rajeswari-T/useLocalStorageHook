import { useEffect, useState } from "react";

function getSavedData(key, initialvalue) {
  var savedData = JSON.parse(localStorage.getItem(key));
  if (savedData) return savedData;
  if (initialvalue instanceof Function) return initialvalue();
  return initialvalue;
}

export function useLocalStorage(key, initialvalue) {
  const [value, setValue] = useState(() => {
    return getSavedData(key, initialvalue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}
