import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { Image, Text } from './UI';

const toggleContactsListHandler = () => {
  const contactList = document.querySelector('.contact-section');
  if (contactList.className.indexOf('active-contact-list') >= 0) {
    contactList.setAttribute('class', 'contact-section');
  } else {
    contactList.setAttribute('class', 'contact-section active-contact-list');
  }
};

const MessageSectionHeader = ({ userInMessageSection, allContacts }) => {
  const userData = allContacts[allContacts.findIndex(contact => contact.googleId === userInMessageSection.googleId)];
  return (
      <div className="messages-section-container__header">
          <Image src={userData.image} alt="profile icon" className="profile-icon" />
          <Text className="contacts-name">{userData.username}</Text>
          {
         userData.online
           ? <Text className="last-seen">Online</Text>
           : (
               <Text className="last-seen">
                  Last Seen
                   {' '}
                   {moment(userData.lastSeen).fromNow()}
               </Text>
           )
        }
          <Image src="/img/search-2.svg" alt="search icon" className="search-icon" />
          <Image src="/img/attachment.svg" alt="attachment icon" className="attachment-icon" />
          <Image src="/img/dot-menu.svg" alt="menu icon" className="menu-icon" />
          <Image src="img/menu.svg" alt="toggle contact icon" className="toggle-icon" onClick={toggleContactsListHandler} />
      </div>
  );
};

MessageSectionHeader.propTypes = {
  userInMessageSection: PropTypes.shape({
    online: PropTypes.bool,
  }).isRequired,
  allContacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = store => ({ allContacts: store.contacts, userInMessageSection: store.MessageSectionUser });

export default connect(mapStateToProps)(MessageSectionHeader);
