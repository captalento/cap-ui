import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css'

export const root = style({
  fontSize: '40px',
  // fontFamily: vars.fonts.heading,
  // marginBottom: vars.space.small,
  color: vars.colors.secondary
});



// export const xsmall = sprinkles({
//   font: 'xsmall',
// });

// export const small = sprinkles({
//   font: 'small',
// });

// export const standard = sprinkles({
//   font: 'standard',
// });

// export const large = sprinkles({
//   font: 'large',
// });

// export const strong = sprinkles({
//   fontWeight: 'strong',
// });