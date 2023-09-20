import { useEffect, useState } from "react";

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storage = localStorage.getItem(key);
    return storage ? JSON.parse(storage) : initialState; 
  });

  // Store data in LocalStorage Effect
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}


// ///