const userEvents = ( state = [], action) => {
  switch(action.type) {
    case 'ALL_USER_EVENTS':
      return action.userEvents;
      break;

      case 'EDIT_USER_EVENT':
        let alluserEvents = state;
        index = alluserEvents.findIndex( u => u.id === action.userEvent.id)
        alluserEvents[index] = action.userEventCard;
          return [...allUserEvents];
          break;

      case 'DELETE_USER_EVENT':
        let index = state.findIndex( u => u.id === action.id)
          return [
            ...state.slice(0, index),
            ...state.slice(index + 1)
       ]
        break;

      default:
        return state;
     }
   }

export default userEvents;
