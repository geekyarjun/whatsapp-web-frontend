import { combineReducers } from 'redux';
import ContactsReducer from './ContactsReducer';
import UserReducer from './UserReducer';
import MessageSectionUserReducer from './MessageSectionUserReducer';

export default combineReducers({ contacts: ContactsReducer, user: UserReducer, MessageSectionUser: MessageSectionUserReducer });
/* import initialStates from '../states';

const Reducer = (state = initialStates, action) => {
  console.log('in reducer states', state, action);
  switch (action.type) {
    case 'ChangeUserData':
      return {
        ...state,
        userData: action.value,
      };
    case 'ChangeAllUsersData':
      return {
        ...state,
        allUsers: action.value,
      };
    case 'ChangeUserInMessageSection':
      return {
        ...state,
        userInMessageSection: action.value,
      };
    case 'UpdateUserInMessageSection':
    { const allUsers = [].concat(state.allUsers);
      console.log('user============<in reducer', allUsers);
      // let UpdatedData = allUsers;
      const index = allUsers.findIndex(user => user.googleId === action.value.googleId);
      allUsers.splice(index, 1, action.value);
      console.log('after replacing objec', allUsers);
      return Object.assign(
        {},
        state,
        { allUsers },
      );
    }
    default:
      return state;
  }
};
export default Reducer;
 */
