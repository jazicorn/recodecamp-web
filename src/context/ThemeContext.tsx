import React, { createContext, useReducer } from 'react';

const initialState: themeData = {
  darkMode: false,
};

// Get user darkMode preference from localstorage
const defaultData = () => {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    initialState.darkMode = true;
  }
};

defaultData();

type themeData = {
  darkMode: boolean;
};

type themeAction =
  | {
      type: 'LIGHTMODE';
      darkMode: boolean;
    }
  | {
      type: 'DARKMODE';
      darkMode: boolean;
    };

const themeReducer = (state: themeData, action: themeAction): themeData => {
  switch (action.type) {
    case 'LIGHTMODE':
      return { darkMode: false };
    case 'DARKMODE':
      return { darkMode: true };
    default:
      return state;
  }
};

const myThemes = {
  state: initialState,
  dispatch: (action: themeAction) => {
    return action;
  },
};

export const ThemeContext = createContext<{
  state: themeData;
  dispatch: (action: themeAction) => void;
}>(myThemes);

interface Props {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return <ThemeContext.Provider value={{ state, dispatch }}>{children}</ThemeContext.Provider>;
};

// export const useTheme = () => useContext(ThemeContext);
