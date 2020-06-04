import React from 'react';
import Proptypes from 'prop-types';

import { ButtonSty } from './styles';

export default function Button({ children, type, onClick }) {
  return (
    <ButtonSty onClick={onClick} type={type}>
      {children}
    </ButtonSty>
  );
}

Button.propTypes = {
  children: Proptypes.node.isRequired,
  type: Proptypes.string.isRequired,
  onClick: Proptypes.func.isRequired,
};
