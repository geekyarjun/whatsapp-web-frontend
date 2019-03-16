const ContactsReducer = (state = [], action) => {
  console.log('action', action.data, action.type);
  switch (action.type) {
    case 'SET_CONTACTS':
      return [
        ...action.data,
      ];
    case 'UPDATE_CONTACTS':
    {
      // console.log('state', state, action.data);
      const allUsers = [].concat(state);
      const index = allUsers.findIndex(user => user.googleId === action.data.googleId);
      allUsers.splice(index, 1, action.data);
      // console.log('allUsers', allUsers);
      return [
        ...allUsers,
      ];
    }
    default:
      return state;
  }
};

export default ContactsReducer;
