const MessageSectionUserReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER_IN_MESSAGESECTION':
      return {
        ...action.data,
      };
    default:
      return state;
  }
};

export default MessageSectionUserReducer;
