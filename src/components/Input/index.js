import React from 'react';
import PropTypes from 'prop-types';
import { InputContainerSty } from './styles';

export default function Input({
  placeholder,
  type,
  name,
  onChange,
  value,
  required,
}) {
  return (
    <InputContainerSty
      required={required}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      name={name}
    />
  );
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

Input.defaultProps = {
  onChange: () => {},
  required: false,
};
