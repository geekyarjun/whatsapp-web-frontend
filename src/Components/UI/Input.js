import React from 'react';
import PropTypes from 'prop-types';

const Input = (
  {
    type, name, ariaLabel, placeholder, className,
  },
) => (
    <input
      type={type}
      name={name}
      aria-label={ariaLabel}
      placeholder={placeholder}
      className={className}
    />
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  ariaLabel: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Input.defaultProps = {
  ariaLabel: '',
  className: '',
  name: '',
};

export default Input;
