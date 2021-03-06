import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
  },

  palette: {
    background: {
      default: '#f6f6f6',
    },
    primary: {
      main: '#FFC100',
      dark: '#E9AB08',
    },
    secondary: {
      main: '#252525',
    },
  },
});

export default lightTheme;
