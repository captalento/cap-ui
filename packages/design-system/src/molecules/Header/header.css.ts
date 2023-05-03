import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css'

export const headerRoot = style({
  // background: '#1a1d20',
  // padding: `0 ${vars.space.large}`,
  height: 'auto',
  width: '100%',
  boxShadow: '0 0px 14px -5px rgb(0 0 0)',
  display: 'flex',
  justifyContent: 'center'
});

export const containerRoot = style({
  display: 'flex',
  minHeight: 80,
  width: '80%',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: `0 ${vars.space.large}`,
});

export const logoRoot = style({
  // background: 'green',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});


export const navRoot = style({
  display: 'flex',
  // alignItems: 'center',
  // height: '100%',
});

export const ulRoot = style({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  padding: 0,
  listStyleType: 'none',
  
  gap: '0 20px',
  
  '@media': {
    'screen and (max-width: 768px)': {
      display: 'none',
    }
  }
});



