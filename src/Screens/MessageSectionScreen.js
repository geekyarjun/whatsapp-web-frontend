import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MessageSectionContainer from '../Components/MessageSectionContainer';
import MessageSectionWrapperScreen from './MessageSectionWrapperScreen';
import MessageSectionInitialScreen from '../Components/MessageSectionInitialScreen';

const MessageSectionScreen = ({ userInMessageSection }) => (
    <MessageSectionContainer>
        {
        !Object.keys(userInMessageSection).length
          ? <MessageSectionInitialScreen />
          : <MessageSectionWrapperScreen />
        }
    </MessageSectionContainer>
);

const mapStateToProps = store => ({ userInMessageSection: store.MessageSectionUser });

MessageSectionScreen.propTypes = {
  userInMessageSection: PropTypes.shape({
    online: PropTypes.bool,
  }).isRequired,
};

export default connect(mapStateToProps)(MessageSectionScreen);
