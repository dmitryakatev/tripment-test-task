import { styleWidget } from '@jss-helper';

export const { classes } = styleWidget('list', {
  title: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '32px',
    color: '#244D51',
  },
  info: {
    marginTop: '19px',

    '& svg': {
      verticalAlign: 'middle',
      marginRight: '7px',
    },
  },
  infoText: {
    fontFamily: 'Inter',
    verticalAlign: 'middle',
    fontSize: '16px',
    color: '#244D51',
  },

  list: {
    marginTop: '29px',
  },
  item: {
    fontFamily: 'Inter',
    fontWeight: 600,
    display: 'flex',
    height: '152px',
    boxSizing: 'border-box',
    padding: '24px 32px 31px 32px',

    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: '#EAEEEE',

    '&:hover': {
      background: '#F5F7F7',
    },
  },
  photo: {
    position: 'relative',
    width: '96px',
    height: '96px',
    marginRight: 16,
  },
  left: {
    flex: 1,
  },
  right: {
    textAlign: 'right',
  },

  point: {
    width: 4,
    height: 4,
    margin: '0 8px',
    borderRadius: '100%',
  },
  video: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },

  name: {
    fontSize: '22px',
    color: '#244D51',
    marginTop: '4px',
  },
  speciality: {
    fontSize: '16px',
    color: '#244D51',
    marginTop: '13px',

    '& div': {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
  },
  specialitySplitter: {
    background: '#244D51',
  },
  reviews: {
    color: '#D97767',
  },
  address: {
    fontSize: '16px',
    color: '#668386',
    marginTop: 15,

    '& div': {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
  },
  addressSplitter: {
    background: '#668386',
  },

  agvPrice: {
    fontSize: '14px',
    color: '#244D51',
    textDecoration: 'underline',
    textDecorationStyle: 'dashed',
    marginTop: '5px',
  },
  price: {
    fontWeight: 600,
    fontSize: '18px',
    color: '#244D51',
    marginTop: '9px',
  },
  like: {
    cursor: 'pointer',
    marginTop: '25px',
  },
});
