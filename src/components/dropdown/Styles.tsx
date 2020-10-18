import { styleWidget } from '@jss-helper';

export const { classes } = styleWidget('drowDown', {
  dropDown: {
    position: 'relative',
    height: '40px',
    borderRadius: '3px',
    display: 'inline-block',
    outline: 'none',
  },
  content: {
    display: 'flex',
    width: '100%',
    height: '100%',
    borderRadius: '4px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#BECACB',
    boxSizing: 'border-box',
    cursor: 'pointer',
    color: '#244D51',

    '& svg': {
      fill: '#668386',
    },
  },
  expandedContent: {
    backgroundColor: '#327680',
    color: '#FFFFFF',

    '& $textCount:before': {
      backgroundColor: 'white',
    },

    '& svg': {
      fill: 'white',
    },
  },
  text: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
    marginLeft: '11px',
  },
  textCount: {
    fontWeight: 'bold',

    '&:before': {
      content: '""',
      display: 'inline-block',
      verticalAlign: 'middle',
      width: 5,
      height: 5,
      margin: '0 8px',
      borderRadius: '100%',
      backgroundColor: '#244D51',
    }
  },
  trigger: {
    margin: '0 18px 0 11px',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  triggerIconRotate: {
    transform: 'rotate(180deg)',
  },
  context: {
    position: 'absolute',
    display: 'none',
    flexDirection: 'column',
    borderRadius: '8px',
    backgroundColor: 'white',
    boxShadow: '-4px 4px 8px rgba(0, 0, 0, 0.16)',
  },
  wrap: {
    padding: '24px 16px 0 16px',
  },
  expanded: {
    display: 'flex',
  },
});
