import React from 'react';
import PropTypes from 'prop-types';

const MessageContainerChats = ({ children }) => (
    <div className="messages-section-container__messages">
        { children }
    </div>
);

MessageContainerChats.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MessageContainerChats;
