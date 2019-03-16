import React from 'react';
import PropTypes from 'prop-types';
import { Image } from './UI';

const SignInButton = ({ onClickHandler }) => (
    <div className="loginContainer__googlebtn" id="googleButton" onKeyDown={onClickHandler} onClick={onClickHandler} role="button" tabIndex="0">
        <Image src="/img/google.svg" alt="google" />
        <span>Sign in with Google</span>
    </div>
);
SignInButton.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
};
export default SignInButton;
