import { createThemeContract, createTheme } from '@vanilla-extract/css';
import { colors } from '@captalento/design-tokens'
export const theme = createThemeContract({
  color: {
    primary: '',
    secondary:'',
  },
  space: {
    small: '',
    medium: '',
  }
});

const [themeClass, vars] = createTheme(theme, {
  color: {
    primary: colors.blue[100],
    secondary:'',
  },
  space: {
    small: '4px',
    medium: '8px',
  },
});