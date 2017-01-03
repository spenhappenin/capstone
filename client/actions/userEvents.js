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

export const editUserEventCard = (id, name, sport, date, time, capacity, venue,
                            street, city, state, zip, skill_level, description ) => {
 return(dispatch) => {
   $.ajax({
     url: `/api/events/${id}`,
     type: 'PUT',
     dataType: 'JSON',
     data: { details: {id, name, sport, date, time, capacity, venue,
     street, city, state, zip, skill_level, description} }
   }).done(data => {
     dispatch({ type: 'EDIT_USER_EVENT', id });
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
