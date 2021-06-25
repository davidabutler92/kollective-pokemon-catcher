import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#72e7ff',
      main: '#29b6f6',
      dark: '#0085c1',
    },
    secondary: {
      light: '#ff867c',
      main: '#ef5350',
      dark: '#b61827',
    },
  },
  typography: {
    fontFamily: 'sans-serif',
  },
});

export default theme;
