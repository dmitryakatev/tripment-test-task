import { styleWidget } from '@jss-helper';

export const { classes } = styleWidget('slider', {
  slider: {
    display: 'flex',
    position: 'relative',
    boxSizing: 'border-box',
    outline: 'none',
    margin: '5px 0',
    cursor: 'pointer',
    fontSize: '16px',
  },
  text: {
    flex: 1,
  },
  check: {
    position: 'relative',
    width: '54px',
    height: '32px',
    background: '#BECACB',
    borderRadius: '50px',
  },
  button: {
    transition: 'transform .3s ease-in-out',
    position: 'absolute',
    width: '26px',
    height: '26px',
    margin: '3px',
    boxSizing: 'border-box',
    background: 'white',
    borderRadius: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    left: 0,

    '& svg': {
      fill: '#91A5A7',
    },
  },
  checked: {
    background: 'green',

    '& $button': {
      transform: 'translateX(calc(100% - 3px))',
      // left: 'auto',
      // right: 0,
    },

    '& svg': {
      fill: 'green',
    },
  },
});
