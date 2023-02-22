import { createTheme, style } from '@vanilla-extract/css';
import { colors } from '@captalento/design-tokens'

const [themeClass, vars] = createTheme({
  color: colors,
  space: {
    small: '4px',
    medium: '8px',
  }
});

export const containerStyles = style({
  backgroundColor: vars.color.blue[100]
});