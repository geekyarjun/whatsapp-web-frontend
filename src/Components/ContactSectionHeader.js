import React from 'react';
import PropTypes from 'prop-types';
import { Image } from './UI';
import apiCaller from '../Common/apiCaller';
import config from '../config';

const togglePopUp = () => {
  console.log('In togglePop', document.querySelector('.contact-section__popup'));
  const popUp = document.querySelector('.contact-section__popup');
  if (popUp.className.indexOf('active__popup') < 0) {
    popUp.setAttribute('class', 'contact-section__popup active__popup');
  } else {
    popUp.setAttribute('class', 'contact-section__popup');
  }
};

const handleLogout = async () => {
  // const res = await apiCaller.get('http://127.0.0.1:3001/auth/google/logout');
  // eslint-disable-next-line
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250YWN0X251bWJlciI6bnVsbCwiaW1hZ2UiOiJodHRwczovL2xoNS5nb29nbGV1c2VyY29udGVudC5jb20vLUtHSkFQUmxoekcwL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUJvL184d3FGMzNkYmtRL3Bob3RvLmpwZz9zej0xMDAiLCJfaWQiOiI1YzQxYjA1NTEzNTRiYTcyYzRjOWQ1MjMiLCJnb29nbGVJZCI6IjEwMDAwOTkwOTUwNzMyOTg2NzU1MiIsInVzZXJuYW1lIjoiR2Vla3kgQXJqdW4iLCJlbWFpbCI6Iml0c2FyanVuc2hyaXZhc3RhdmFAZ21haWwuY29tIiwibGFzdFNlZW4iOiIyMDE5LTAyLTAyVDEyOjI5OjE4LjM1MloiLCJpYXQiOjE1NDkyNTY3MzUsImV4cCI6MTU0OTM0MzEzNX0.-gIyHmgT6u7lr6Bw5Ayu3r2rTs_MKdCfeaMOsoSoid1';
  const users = await apiCaller.post(`${config.server_url}/users/isLoggedIn`, token);
  console.log('isLoggedIn', users);
  // .then(res => console.log('res', res));
};

const ContactSectionHeader = ({ image }) => (
    <header>
        <Image src={image} alt="profile icon" className="contact-section__profile-image" />
        <Image src="img/status.svg" alt="status icon" className="contact-section__status-icon" />
        <Image src="img/chat.svg" alt="chat icon" className="contact-section__chat-icon" />
        <Image src="img/dot-menu.svg" alt="menu icon" className="contact-section__menu-icon" onClick={togglePopUp} />
        <div className="contact-section__popup">
            <ul>
                <li>New Group</li>
                <li>Profile</li>
                <li>Archived</li>
                <li>Starred</li>
                <li>Settings</li>
                {
                    // eslint-disable-next-line
                    <li onClick={handleLogout}>Log Out</li>
                }
            </ul>
        </div>
    </header>
);

ContactSectionHeader.propTypes = {
  image: PropTypes.string.isRequired,
};
export default ContactSectionHeader;
