const userEvents = ( state = [], action) => {
  switch(action.type) {
    case 'ALL_USER_EVENTS':
      return action.userEvents;
      break;
    default:
      return state;
  }
}

export default userEvents;
