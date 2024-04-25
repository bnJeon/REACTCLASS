import React from 'react';
import PropTypes from 'prop-types';

function CustomButton({ text }) {
  return (
    <button>{text}</button>
  );
}

CustomButton.propTypes = {
  text: PropTypes.string.isRequired
}

export default CustomButton;