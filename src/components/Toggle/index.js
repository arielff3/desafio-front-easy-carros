import React from 'react';

import Proptypes from 'prop-types';

import { ReactComponent as MoonIcon } from '../../assets/moon.svg';
import { ReactComponent as SunIcon } from '../../assets/sun.svg';

import ToggleContainer from './styles';

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

export default Toggle;

Toggle.propTypes = {
  theme: Proptypes.string.isRequired,
  toggleTheme: Proptypes.func.isRequired,
};
