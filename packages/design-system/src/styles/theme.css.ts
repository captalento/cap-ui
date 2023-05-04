import {
  createTheme,
  createGlobalTheme,
  createThemeContract,
} from "@vanilla-extract/css";
import { colors, fontSizes } from '@captalento/design-tokens'

const root = createGlobalTheme("#app", {
  colors: {
    blue: { ...colors.blue },
    white: { ...colors.white },
    black: { ...colors.black },
    red: { ...colors.red },
    gray: { ...colors.gray },
    orange: { ...colors.orange },
    yellow: { ...colors.yellow },
    purple: { ...colors.purple },
    green: { ...colors.green },
  },
  space: {
    small: "4px",
    medium: "8px",
    large: "16px"
  },
  fonts: {
    heading: "Montserrat, arial, serif",
    body: "Montserrat"
  },
  fontSizes: {
    small: fontSizes.sm,
    medium: fontSizes.md,
    large: fontSizes.lg,
  },
  lineHeights: {
    small: "24px",
    medium: "28px",
    large: "40px"
  },
  gridRepeat: {
    "4x": "repeat(4, 1fr)",
  },
});

const themeContract = createThemeContract({
  primary: null,
  secondary: null,
  background: null,
  text: {
    normal: null,
    dimmed: null
  }
});

export const lightTheme = createTheme(themeContract, {
  primary: colors.blue.blue100,
  secondary: colors.black.black100,
  background: colors.white.white100,
  text: {
    normal: "#1F2937",
    dimmed: "#6B7280"
  }
});

export const darkTheme = createTheme(themeContract, {
  primary: colors.blue.blue100,
  secondary: colors.white.white100,
  background: colors.black.black200,
  text: {
    normal: "#F9FAFB",
    dimmed: "#D1D5DB"
  }
});

export const vars = { ...root, theme: themeContract };