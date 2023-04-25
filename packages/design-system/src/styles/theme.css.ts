import {
  createGlobalTheme,
  createTheme,
  createThemeContract
} from "@vanilla-extract/css";
import { colors } from '@captalento/design-tokens'

const root = createGlobalTheme("#app", {
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
    small: "16px",
    medium: "20px",
    large: "36px"
  },
  lineHeights: {
    small: "24px",
    medium: "28px",
    large: "40px"
  }
});

const colorsContract = createThemeContract({
  primary: null,
  secondary: null,
  background: null,
  text: {
    normal: null,
    dimmed: null
  }
});

export const lightTheme = createTheme(colorsContract, {
  primary: colors.blue.blue100,
  secondary: colors.black.black100,
  background: colors.white.white100,
  text: {
    normal: "#1F2937",
    dimmed: "#6B7280"
  }
});

export const darkTheme = createTheme(colorsContract, {
  primary: colors.blue.blue100,
  secondary: colors.white.white100,
  background: colors.black.black200,
  text: {
    normal: "#F9FAFB",
    dimmed: "#D1D5DB"
  }
});

export const vars = { ...root, colors: colorsContract };