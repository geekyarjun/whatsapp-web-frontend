const UserReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGGED_IN':
      return Object.assign(
        {},
        state,
        action.data,
      );
    //   break;
    default:
      return state;
  }
};

export default UserReducer;
