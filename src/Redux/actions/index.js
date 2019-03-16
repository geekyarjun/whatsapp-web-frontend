// export const ChangeUserData = value => ({
//   type: 'ChangeUserData',
//   value,
// });

// export const ChangeAllUsersData = value => ({
//   type: 'ChangeAllUsersData',
//   value,
// });

// export const ChangeUserInMessageSection = value => ({
//   type: 'ChangeUserInMessageSection',
//   value,
// });

export const UpdateContacts = data => ({
  type: 'UPDATE_CONTACTS',
  data,
});

export const SetUser = data => ({
  type: 'LOGGED_IN',
  data,
});

export const SetContacts = data => ({
  type: 'SET_CONTACTS',
  data,
});

export const SetUserInMessageSection = data => ({
  type: 'SET_USER_IN_MESSAGESECTION',
  data,
});
// export default { ChangeUserData };
