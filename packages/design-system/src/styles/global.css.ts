import { globalStyle, globalFontFace } from '@vanilla-extract/css';
import { vars } from './theme.css';

globalStyle('*', {
  boxSizing: 'border-box',
});

globalStyle('body', {
  margin: 0,
});

const fontFamily = 'Montserrat'
globalFontFace(fontFamily, {
  src: [
    "url(https://fonts.gstatic.com/s/montserrat/v15/JTUSjIg1_i6t8kCHKm459Wlhzg.ttf) format('truetype')",
    "url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_cJD3gnD-w.ttf) format('truetype') 400",
    "url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_ZpC3gnD-w.ttf) format('truetype') 500",
    "url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_bZF3gnD-w.ttf) format('truetype') 600",
  ],
  fontWeight: 100,
  fontDisplay: 'swap'
})

globalStyle('#app', {
  padding: vars.space.large,
  fontFamily: fontFamily,
  background: vars.theme.background,
  color: vars.theme.text.normal,
  minHeight: '100vh'
});
