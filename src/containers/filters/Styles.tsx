import { styleWidget } from '@jss-helper';

export const { classes } = styleWidget('filters', {
  dropDownFilter: {
    marginRight: '11px',
    verticalAlign: 'middle',
  },
  clearFilter: {
    display: 'inline-block',
    verticalAlign: 'middle',
    fontSize: '16px',
    borderBottomWidth: '1px',
    borderBottomStyle: 'dashed',
    borderBottomColor: '#ED6852',
    color: '#ED6852',
    cursor: 'pointer',
  },
  count: {
    color: '#91A5A7',
    marginLeft: '8px',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '16px',
    margin: '10px 0',
    color: '#1C383A',
  },
});
