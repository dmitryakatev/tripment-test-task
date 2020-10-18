import { styleWidget } from '@jss-helper';

export const { classes } = styleWidget('dropDownFooter', {
  dropDownFooter: {
    display: 'flex',
    padding: '7px 16px',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: '#EAEEEE',
  },
  reset: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ED6852',
    textDecoration: 'underline',
    textDecorationStyle: 'dashed',
    cursor: 'pointer',
    fontSize: '13px',
  },
  splitter: {
    flex: 1,
  },
  apply: {
    padding: '0 24px',
    height: '32px',
    border: 0,
    backgroundColor: '#327680',
    color: '#FFFFFF',
    borderRadius: 4,
    cursor: 'pointer',
    outline: 'none',
    fontSize: '16px',
  },
});
