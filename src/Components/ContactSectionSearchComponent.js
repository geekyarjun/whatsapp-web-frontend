import React from 'react';
import { Image, Input } from './UI';

const searchIconToggleHandler = (event) => {
  const element = event.target;
  if (element.className === 'searchIcon') element.setAttribute('class', 'arrowIcon');
  else element.setAttribute('class', 'searchIcon');
};

const ContactSectionSearchComponent = () => (
    <div className="contact-section__search">
        <span className="contact-section__search--wrapper">
            <Image alt="search icon" className="searchIcon" onClick={searchIconToggleHandler} />
            <Image src="img/arrow.svg" alt="search icon" style={{ display: 'none' }} />
            <Input type="text" name="search-contacts" aria-label="search-contacts" placeholder="Search or start new chat" />
        </span>
    </div>
);

export default ContactSectionSearchComponent;
