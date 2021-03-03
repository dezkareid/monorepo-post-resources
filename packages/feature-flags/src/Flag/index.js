import React from 'react';
import PropTypes from 'prop-types';
import useFlag from '../useFlag';

function Flag({ children, name }) {
  const flagValue = useFlag(name);
  if (!flagValue) {
    return null;
  }
  return <>{children}</>;
}

Flag.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  name: PropTypes.string.isRequired,
};

export default Flag;
