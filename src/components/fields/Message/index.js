import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const Message = ({type, children}) => {
  const classes = classNames(
    "messages",
    {[`messages--${type}`] : type }
  );
  return(
    <div className={classes}>
      {children}
    </div>
  )
}

Message.propTypes = {
  /** Can be empty, "warning" or "error" */
  type: PropTypes.oneOf(['error', 'warning']),
}

export default Message;
