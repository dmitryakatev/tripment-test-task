import { styleWidget } from '@jss-helper';

export const { classes } = styleWidget('searchField', {
  searchField: {
    position: 'relative',
    width: '100%',
    height: '30px',
    boxSizing: 'border-box',

    '& input': {
      width: '100%',
      height: '100%',
      border: '1px solid silver',
      padding: '0 50px 0 8px',
      fontSize: '16px',
      borderRadius: '3px',
      boxSizing: 'border-box',
      outline: 'none',
    },
  },
  trigger: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: '0 18px 0 11px',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
});
