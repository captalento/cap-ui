import {useState, ReactNode} from 'react';
import '../styles/global.css';
import { darkTheme, lightTheme } from "../styles/theme.css";

export function DSProvider({ children }: {children: ReactNode}) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  return (
    <div id='app' className={isDarkTheme ? darkTheme : lightTheme}>
      {children}
      <button onClick={() => setIsDarkTheme((currentValue) => !currentValue)}>
        Switch to {isDarkTheme ? "light" : "dark"} theme
      </button>
    </div>
  )
}
