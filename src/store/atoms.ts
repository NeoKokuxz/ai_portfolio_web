import { atom } from 'jotai';

// Get initial dark mode from localStorage or default to true (dark mode)
const getInitialDarkMode = () => {
  if (typeof window !== 'undefined') {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return JSON.parse(savedMode);
    }
    // Default to true instead of checking system preference
    return true;
  }
  return true; // Default to dark mode
};

// Base atom for dark mode state
const darkModeAtom = atom(getInitialDarkMode());

// Initialize dark mode on first load
if (typeof window !== 'undefined') {
  document.documentElement.classList.toggle('dark', getInitialDarkMode());
}

// Derived atom with write function to handle side effects
export const darkModeWithPersistAtom = atom(
  (get) => get(darkModeAtom),
  (get, set, newValue: boolean) => {
    // Update the DOM
    document.documentElement.classList.toggle('dark', newValue);
    // Save to localStorage
    localStorage.setItem('darkMode', JSON.stringify(newValue));
    // Update the atom's value
    set(darkModeAtom, newValue);
  }
); 