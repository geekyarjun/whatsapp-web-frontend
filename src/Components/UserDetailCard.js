import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './UI';

const UserDetailCard = ({ userData }) => (
    <div className="loginContainer__userDetails">
        <div className="loginContainer__userDetails--name">
            <Text>{userData.username}</Text>
        </div>
        <div
          className="loginContainer__userDetails--image"
          style={{
            backgroundImage: `url(${userData.image})`,
          }}
        />
    </div>
);
UserDetailCard.propTypes = {
  userData: PropTypes.shape({
    signIn: PropTypes.bool,
  }).isRequired,
};
export default UserDetailCard;
