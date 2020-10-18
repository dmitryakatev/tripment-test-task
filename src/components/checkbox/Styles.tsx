import { styleWidget } from '@jss-helper';

export const { classes } = styleWidget('checkBox', {
  checkBox: {
    position: 'relative',
    boxSizing: 'border-box',
    whiteSpace: 'nowrap',
    outline: 'none',
    margin: '5px 0',
    cursor: 'pointer',

    '& svg': {
      verticalAlign: 'middle',
    },
  },
  text: {
    display: 'inline-block',
    whiteSpace: 'nowrap',
    color: '#244D51',
    marginLeft: '9px',
    fontSize: '16px',
  },
});
