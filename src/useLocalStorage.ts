import { useState, useEffect } from 'react';

type LocalStorageSetValue = string;
type LocalStorageReturnValue = string | null;

type UseLocalStorage = (key: string) => [
  value: LocalStorageReturnValue,
  actions: {
    setItem: (value: LocalStorageSetValue) => void;
    removeItem: () => void;
  }
];

export const useLocalStorage: UseLocalStorage = (key) => {
  const [value, setValue] = useState<LocalStorageReturnValue>(null);

  useEffect(() => {
    const storedValue = localStorage.getItem(key);
    setValue(storedValue);
  }, [key]);

  const setItem = (newValue: LocalStorageSetValue) => {
    localStorage.setItem(key, newValue);
    setValue(newValue);
  };

  const removeItem = () => {
    localStorage.removeItem(key);
    setValue(null);
  };
  return [value, { setItem, removeItem }];
};