import { styleWidget } from '@jss-helper';

export const { classes } = styleWidget('app', {
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    fontFamily: 'Inter',
    justifyContent: 'center',
  },
  container: {
    width: '908px',
    padding: '0 32px',
  },
  filterWrap: {
    position: 'fixed',
    top: 0,
    width: 'inherit',
    background: 'white',
  },
  line: {
    height: 40,
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: '#EAEEEE',
    boxSizing: 'border-box',
  },
  filter: {
    padding: '24px 0',
  },
  content: {
    marginTop: '130px',
  },
});
