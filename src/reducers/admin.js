const admin = (state, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        loggedIn : true
      }
    default:
      return state
  }
}

export default admin;
