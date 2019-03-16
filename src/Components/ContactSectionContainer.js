import React from 'react';
import PropTypes from 'prop-types';

const ContactSectionContainer = ({ children }) => (
    <div className="contact-section">
        { children }
    </div>
);

ContactSectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContactSectionContainer;
