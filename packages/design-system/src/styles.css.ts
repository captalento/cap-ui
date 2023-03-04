import { createTheme, style } from '@vanilla-extract/css';
import { colors } from '@captalento/design-tokens'

const [themeClass, vars] = createTheme({
  color: colors,
  space: {
    small: '4px',
    medium: '8px',
  },
});

export const containerStyles = style({
  // backgroundColor: vars.color.red[100], // does not working
  backgroundColor: '#22262B',
  color: '#EDEFF9'
});

