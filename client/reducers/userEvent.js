const userEvent = (state = {}, action) => {
	switch(action.type) {
		case 'SHOW_USER_EVENT':
			return action.userEvent,
			break;
		default: 
			return state;
	}
}

export default userEvent;