import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css'
export const headingClass = style({ color: vars.theme.primary,	fontSize: "40px"})

export const primaryClass = style({
  color: vars.theme.primary,
});

export const secondaryClass = style({
  color: vars.theme.secondary,
});

export const blueClass = style({
  color: vars.colors.blue.blue100,
});
export const yellowClass = style({
  color: vars.colors.yellow.yellow100,
});
export const orangeClass = style({
  color: vars.colors.orange.orange100,
});
export const greenClass = style({ 
  color: vars.colors.green.green100,
});
export const redClass = style({
  color: vars.colors.red.red100,
});

export const lgClass = style({
  fontSize: '40px',
});

export const mdClass = style({
  fontSize: '30px',
});

export const smClass = style({
  fontSize: '20px',
});
