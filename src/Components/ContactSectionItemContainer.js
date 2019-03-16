import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

// This component take ContactItem means one contact(chat/person) component and renders it
const ContactSectionItemContainer = ({ userData, allContacts }) => {
  /* eslint no-underscore-dangle: 0 */
  const ContactItems = allContacts.map(
    contactDetails => contactDetails._id !== userData._id
    && (
        <ContactItem
          key={`key+${contactDetails._id}`}
          contactDetails={contactDetails}
        />
    ),
  );

  return (
      <section className="contact-section__list">
          {ContactItems}
      </section>
  );
};

ContactSectionItemContainer.propTypes = {
  userData: PropTypes.shape({
    online: PropTypes.bool,
  }).isRequired,
  allContacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ContactSectionItemContainer;
