import { ReactNode } from 'react';
import clsx from 'clsx';

import '../styles/global.css';
import { darkTheme, lightTheme } from "../styles/theme.css";

export interface DSProviderProps {
  children: ReactNode;
  theme?: 'dark' | 'light';
  className?: string
}

export function DSProvider({ children, className, theme = 'dark' }: DSProviderProps) {
  const themeClass = clsx({
    [darkTheme]: theme === 'dark',
    [lightTheme]: theme === 'light',
  }, className);

  return (
    <section id='app' className={themeClass}>
      {children}
    </section>
  )
}
