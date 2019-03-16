import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text } from './UI';
import Store from '../Redux/store';
import { SetUserInMessageSection } from '../Redux/actions/index';

const renderMessageContainer = (user) => {
  Store.dispatch(SetUserInMessageSection(user));
};
const ContactItem = ({ contactDetails }) => (
    <div className="contacts" onClick={() => renderMessageContainer(contactDetails)} role="button" tabIndex="0">
        <Image src={contactDetails.image} alt="contact icon" className="contact-icon" />
        <Text className="contacts-name">{contactDetails.username}</Text>
        <Text className="contacts-recent-message">hii</Text>
        <Text className="contacts-recent-message-time">8:30 AM</Text>
    </div>
);

ContactItem.propTypes = {
  contactDetails: PropTypes.shape({
    online: PropTypes.bool,
  }).isRequired,
};

export default ContactItem;
