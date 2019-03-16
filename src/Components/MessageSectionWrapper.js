import React from 'react';
import PropTypes from 'prop-types';

const MessageSectionWrapper = ({ children }) => (
    <div className="messages-section-container">
        { children }
    </div>
);

MessageSectionWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MessageSectionWrapper;
