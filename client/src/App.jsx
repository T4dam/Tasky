import React from 'react';
import { CssBaseline } from '@mui/material';

import { Provider as ReduxProvider } from 'react-redux';
import store from './store';
import Router from './Routes/router';

const App = () => (
  <CssBaseline>
    <ReduxProvider store={store}>
      <Router />
    </ReduxProvider>
  </CssBaseline>
);

export default App;
