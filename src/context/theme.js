/* eslint-disable react/forbid-prop-types */
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext, ThemeProvider as Theme } from 'styled-components';

import { darkTheme, lightTheme } from '~/theme/theme';
import Toggle from '~/components/Toggle';

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme || {};
};

export const ThemeProvider = ({ children }) => {
  const colorTem = localStorage.getItem('darkmode')
    ? localStorage.getItem('darkmode')
    : 'light';
  const [theme, setTheme] = useState(colorTem);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('darkmode', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('darkmode', 'light');
    }
  };

  return (
    <Theme theme={theme === 'light' ? lightTheme : darkTheme}>
      {children}
      <Toggle theme={theme} toggleTheme={toggleTheme} />
    </Theme>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.array.isRequired,
};
