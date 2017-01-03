export const fetchUserEvents = () => {
  return(dispatch) => {
    $.ajax({
      url: '/api/events',
      type: 'GET',
      dataType: 'JSON'
    }).done( userEvents => {
      dispatch({ type: 'ALL_USER_EVENTS', userEvents });
    }).fail( data => {
      console.log(data);
    });
  }
}

export const editUserEventCard = (id, name) => {
 return(dispatch) => {
   $.ajax({
     url: `/api/userEventCard/${id}`,
     type: 'PUT',
     dataType: 'JSON',
     data: { Event: {name} }
   }).done(userEvent => {
     dispatch({ type: 'EDIT_USER_EVENT', userEvents });
   }).fail(data => {
     console.log(data);
   });
 }
}

export const deleteUserEventCard = (id) => {
 return(dispatch) => {
   $.ajax({
     url: `/api/events/${id}`,
     type: 'DELETE',
     dataType: 'JSON'
   }).done(data => {
     dispatch({ type: 'DELETE_USER_EVENT', id });
   }).fail(data => {
     debugger;
     console.log(data);
   });
 }
}

export const singleUserEvent = (id) => {
  return(dispatch) => {
    $.ajax({
      url: `api/events/${id}`,
      type: 'GET',
      dataType: 'JSON'
    }).done( data => {
      dispatch({ type: 'SHOW_USER_EVENT', data });
    }).fail( data => {
      console.log(data);
    });
  }
}
