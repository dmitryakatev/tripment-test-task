import { styleWidget } from '@jss-helper';

// ???
import { classes as dropdownClasses } from '../dropdown/Styles';

export const { classes } = styleWidget('sorter', {
  sorter: {
    [`& .${dropdownClasses.content}`]: {
      border: 0,
    },
  },
  head: {
    verticalAlign: 'middle',
  },
  sortBy: {
    fontWeight: 'bold',
    fontSize: '16px',
    marginTop: '10px',
  },
  item: {
    fontSize: '16px',
    display: 'flex',
    margin: '10px 0',
    cursor: 'pointer',
  },
  icon: {
    width: '20px',

    '& svg': {
      fill: '#244D51',
    },
  },
  text: {
    flex: 1,
  },
});
