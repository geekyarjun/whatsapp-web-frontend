import React from 'react';
import PropTypes from 'prop-types';

const MessageSectionContainer = ({ children }) => (
    <section className="messages-section">
        { children }
    </section>
);

MessageSectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MessageSectionContainer;
