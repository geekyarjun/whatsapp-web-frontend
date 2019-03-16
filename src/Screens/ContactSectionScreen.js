import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import Store from '../Redux/store';
// import * as actionCreators from '../Redux/actions';
import {
  ContactSectionContainer,
  ContactSectionHeader,
  ContactSectionSearchComponent,
  // ContactItem,
  ContactSectionItemContainer,
} from '../Components';
// import { connect } from 'net';

class ContactSectionScreen extends Component {
  componentWillMount() {
    // const { allUsers } = this.props;
    // fetch('http://localhost:3001/users/getUsers', {
    //   method: 'GET',
    // })
    //   .then(response => response.json())
    //   .then((response) => {
    //     // console.log('response', response);
    //     Store.dispatch(actionCreators.ChangeAllUsersData(response));
    //   })
    //   .catch((err) => {
    //   });
  }

  render() {
    const { userData, userData: { image }, allContacts } = this.props;
    return (
        <ContactSectionContainer>
            <ContactSectionHeader image={image} />
            <ContactSectionSearchComponent />
            <ContactSectionItemContainer allContacts={allContacts} userData={userData} />
        </ContactSectionContainer>
    );
  }
}

// const mapStateToProps = state => ({
//   userData: state.user,
//   allUsers: state.allUsers,
// });

ContactSectionScreen.propTypes = {
  userData: PropTypes.shape({
    signIn: PropTypes.bool,
  }).isRequired,
  allContacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default ContactSectionScreen;
