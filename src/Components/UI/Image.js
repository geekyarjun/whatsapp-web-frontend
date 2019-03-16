import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => {
  const { alt } = props;

  return (<img {...props} alt={alt} />);
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Image.defaultProps = {
  src: '',
  className: '',
};

export default Image;
