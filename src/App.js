import React from 'react';
import { ToastContainer } from 'react-toastify';

import { GlobalStyle } from './theme/global';
import Routes from './routes/routes';

import { AuthProvider } from '~/context/auth';
import { ThemeProvider } from '~/context/theme';

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <GlobalStyle />
        <ToastContainer />
        <Routes />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
