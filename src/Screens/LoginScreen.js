import React, { Component } from 'react';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import apiCaller from '../Common/apiCaller';
import errorLogger from '../Common/errorLogger';
import SignInButton from '../Components/SignInButton';
import UserDetailCard from '../Components/UserDetailCard';
import ContactSectionScreen from './ContactSectionScreen';
import MessageSectionScreen from './MessageSectionScreen';
import LoaderScreen from './LoaderScreen';
import config from '../config';
import
{
  SetUser,
  SetContacts,
  UpdateContacts,
} from '../Redux/actions';

const socket = io(config.server_url);

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showChatScreen: false,
      showLoader: false,
    };
  }

  async componentWillMount() {
    // Fetch call should be in a container component, to be implemented
    try {
      // eslint-disable-next-line
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250YWN0X251bWJlciI6bnVsbCwiaW1hZ2UiOiJodHRwczovL2xoNS5nb29nbGV1c2VyY29udGVudC5jb20vLUtHSkFQUmxoekcwL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUJvL184d3FGMzNkYmtRL3Bob3RvLmpwZz9zej0xMDAiLCJfaWQiOiI1YzQxYjA1NTEzNTRiYTcyYzRjOWQ1MjMiLCJnb29nbGVJZCI6IjEwMDAwOTkwOTUwNzMyOTg2NzU1MiIsInVzZXJuYW1lIjoiR2Vla3kgQXJqdW4iLCJlbWFpbCI6Iml0c2FyanVuc2hyaXZhc3RhdmFAZ21haWwuY29tIiwibGFzdFNlZW4iOiIyMDE5LTAyLTAyVDEyOjI5OjE4LjM1MloiLCJpYXQiOjE1NDkyNTY3MzUsImV4cCI6MTU0OTM0MzEzNX0.-gIyHmgT6u7lr6Bw5Ayu3r2rTs_MKdCfeaMOsoSoid1';
      // check if user is logged in or not
      const userData = await apiCaller.post(`${config.server_url}/users/isLoggedIn`, token);
      console.log('userData', userData);
      if (userData.online) {
        this.handleSockets();
        this.onLogInUser(userData);
      } else {
        console.log('userData in else', userData);
      }
    } catch (error) {
      errorLogger(error, 'component will mount of loginscreen');
    }
  }

  componentDidMount() {
    document.getElementById('googleButton').style.animationDuration = '1s';
    document.getElementById('googleButton').style.animationName = 'blur';
  }

  onLogInUser = async (userData) => {
    const { dispatch } = this.props;

    // Set loggedIn user in Redux
    dispatch(SetUser(userData));

    // get users/contacts
    const contacts = await apiCaller.get(`${config.server_url}/users/getUsers`);

    if (contacts.length) {
      contacts.forEach((contact) => {
        contact.online = false;
      });

      // Set contacts in Redux state
      dispatch(SetContacts(contacts));
    }

    setTimeout(() => {
      this.setState({
        showLoader: true,
      });
    }, 3000);

    setTimeout(() => {
      this.setState({
        showChatScreen: true,
        showLoader: false,
      });
    }, 6000);

    socket.emit('connectionFromClientOnLoggedIn', userData);
  }

  handleSockets = () => {
    console.log('In handle sockets');
    const { dispatch } = this.props;

    socket.on('userLoggedIn', (userData) => {
      console.log('userLoggedIn', userData);
      this.onLogInUser(userData);
    });

    socket.on('userDisconnected', (data) => {
      dispatch(UpdateContacts(data));
    });

    // listener for online user list
    socket.on('connectedUsersData', (onlineUsersData) => {
      onlineUsersData.forEach((userData) => {
        dispatch(UpdateContacts(userData.user));
      });
    });
  }

  handleSignIn = () => {
    console.log('socket', socket.id);
    document.getElementById('googleButton').style.transform = 'translate(0px)';
    // window.location.replace(`${config.server_url}/auth/google/`);
    window.open(`${config.server_url}/auth/google?id=${socket.id}`, 'Whatsapp web signin', 'toolbar=yes,scrollbars=yes, resizable=yes, top=100, left=500, width=450, height=500');
    this.handleSockets();
  }

  render() {
    const { showChatScreen, showLoader } = this.state;
    const { userData, allContacts } = this.props;
    console.log('this.state', this.state, 'userData', userData.online);

    if (!userData.online) {
      return (
          <div className="loginContainer">
              <SignInButton onClickHandler={this.handleSignIn} />
          </div>
      );
    }
    if (showLoader) {
      return (
          <div className="container">
              <LoaderScreen />
          </div>
      );
    }
    if (showChatScreen) {
      return (
          <div className="container">
              <ContactSectionScreen allContacts={allContacts} userData={userData} />
              <MessageSectionScreen />
          </div>
      );
    }

    return (
        <div className="loginContainer">
            <UserDetailCard userData={userData} close={this.close} />
        </div>
    );
  }
}

const mapStateToProps = store => ({ userData: store.user, allContacts: store.contacts });

LoginScreen.propTypes = {
  userData: PropTypes.shape({
    signIn: PropTypes.bool,
  }).isRequired,
  allContacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
};
export default connect(mapStateToProps)(LoginScreen);
