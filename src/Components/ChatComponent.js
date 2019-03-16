import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactSectionScreen from '../Screens/ContactSectionScreen';
import MessageSectionScreen from '../Screens/MessageSectionScreen';
import LoaderScreen from '../Screens/LoaderScreen';

class ChatComponent extends Component {
  constructor(props) {
    super(props);

    this.state = { showLoader: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showLoader: false });
    }, 3000);
  }

  render() {
    const { showLoader } = this.state;
    const { allContacts, userData } = this.props;
    if (showLoader) {
      return (
          <div className="container">
              <LoaderScreen />
          </div>
      );
    }
    return (
        <div className="container">
            <ContactSectionScreen allContacts={allContacts} userData={userData} />
            <MessageSectionScreen />
        </div>
    );
  }
}

ChatComponent.propTypes = {
  userData: PropTypes.shape({
    online: PropTypes.bool,
  }).isRequired,
  allContacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ChatComponent;
