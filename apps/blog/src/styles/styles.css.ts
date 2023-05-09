import { style } from '@vanilla-extract/css';

export const sectionClass = style({
  height: '200vh'
})

export const cardsClass = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: 10,
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: '1fr 1fr',
    },
    'screen and (min-width: 1024px)': {
      gridTemplateColumns: '1fr 1fr 1fr',
    }
  }
})