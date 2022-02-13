import React from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { Provider as ReduxProvider } from 'react-redux';
import store from './store';
import Router from './Routes/router';
import lightTheme from './styles/light-theme';

const App = () => (
  <CssBaseline>
    <ThemeProvider theme={lightTheme}>
      <ReduxProvider store={store}>
        <Router />
      </ReduxProvider>
    </ThemeProvider>
  </CssBaseline>
);

export default App;
