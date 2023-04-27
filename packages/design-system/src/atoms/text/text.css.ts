import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css'

export const root = style({

});

export const strong = style({
  fontWeight: 'strong',
});

export const sm = style({
  fontSize: vars.fontSizes.small,
});

export const md = style({
  fontSize: vars.fontSizes.medium,
});

export const lg = style({
  fontSize: '1.25rem'
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

