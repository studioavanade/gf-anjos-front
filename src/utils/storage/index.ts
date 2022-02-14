export const getStorage = (key: string): string | null => {
  const data = localStorage.getItem(key);
  if (data) {
    return data;
  }
  return sessionStorage.getItem(key);
};

export const setLocalStorage = (key: string, value: any): void => {
  localStorage.setItem(key, value);
};

export const setSessionStorage = (name: string, value: any): void => {
  sessionStorage.setItem(name, value);
};

export const removeFromStorage = (key: string): void => {
  localStorage.removeItem(key);
  sessionStorage.removeItem(key);
};

export const clearStorage = (): void => {
  localStorage.clear();
  sessionStorage.clear();
};
