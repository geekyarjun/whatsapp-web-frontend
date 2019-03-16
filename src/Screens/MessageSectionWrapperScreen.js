import React from 'react';
// import PropTypes from 'prop-types';
import {
  MessageSectionChatContainer,
  MessageSectionFooter,
  MessageSectionHeader,
  MessageSectionWrapper,
  MessageReceivedComponent,
  MessageSentComponent,
} from '../Components';

const MessageSectionWrapperScreen = () => (
    <MessageSectionWrapper>
        <MessageSectionHeader />
        <MessageSectionChatContainer>
            <MessageSentComponent />
            <MessageReceivedComponent />
            <MessageSentComponent />
            <MessageReceivedComponent />
            <MessageSentComponent />
            <MessageReceivedComponent />
            <MessageSentComponent />
            <MessageReceivedComponent />
            <MessageSentComponent />
            <MessageReceivedComponent />
            <MessageSentComponent />
            <MessageReceivedComponent />
            <MessageSentComponent />
            <MessageReceivedComponent />
            <MessageSentComponent />
            <MessageReceivedComponent />
            <MessageSentComponent />
            <MessageReceivedComponent />
            <MessageSentComponent />
            <MessageReceivedComponent />
            <MessageSentComponent />
            <MessageReceivedComponent />
        </MessageSectionChatContainer>
        <MessageSectionFooter />
    </MessageSectionWrapper>
);

// MessageSectionWrapperScreen.propTypes = {
//   UserInMessageSection: PropTypes.shape({
//     online: PropTypes.bool,
//   }).isRequired,
// };
export default MessageSectionWrapperScreen;
