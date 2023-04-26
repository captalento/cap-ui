import { ReactNode } from 'react';
import clsx from 'clsx';

import '../styles/global.css';
import { darkTheme, lightTheme } from "../styles/theme.css";

export interface DSProviderProps {
  children: ReactNode;
  theme?: 'dark' | 'light';
}

export function DSProvider({ children, theme = 'dark' }: DSProviderProps) {
  const themeClass = clsx({
    [darkTheme]: theme === 'dark',
    [lightTheme]: theme === 'light',
  });

  return (
    <div id='app' className={themeClass}>
      {children}
    </div>
  )
}
