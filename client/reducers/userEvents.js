const userEvents = ( state = [], action) => {
  switch(action.type) {

    case 'ALL_USER_EVENTS':
      return action.userEvents.reverse();

    case 'PEOPLE_ATTENDING':
      return state.map( e => {
        if (e.id === action.userEvent.id)
          return action.userEvent
        return e
      })

    case 'SEARCH_RESULTS':
      return action.events

    case 'EDIT_USER_EVENT':
      return state.map( userEvent => {
        if (userEvent.id === action.userEvent.id)
          return action.userEvent
        return userEvent
      })

      case 'DELETE_USER_EVENT':
        return state.filter( u => u.id !== action.id )

      default:
        return state;
     }
   }

export default userEvents;
