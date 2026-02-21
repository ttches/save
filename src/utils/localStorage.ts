const PREFIX = "save:";

export const load = <T>(key: string, fallback: T): T => {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    if (raw === null) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
};

export const save = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch {
    // storage full or unavailable
  }
};

export const remove = (key: string): void => {
  try {
    localStorage.removeItem(PREFIX + key);
  } catch {
    // unavailable
  }
};
