export const fetchUserEvents = () => {
  return(dispatch) => {
    let lat = sessionStorage.getItem("userLat")
    let long = sessionStorage.getItem("userLong")
    $.ajax({
      url: '/api/all_events',
      type: 'GET',
      dataType: 'JSON',
      data: {position: {lat, long}}
    }).done( userEvents => {
      userEvents.sort(function(a,b) {return (a.distance_from_user > b.distance_from_user) ? 1 : ((b.distance_from_user > a.distance_from_user) ? -1 : 0);} );

      dispatch({ type: 'ALL_USER_EVENTS', userEvents });
    }).fail( data => {
      console.log(data);
    });
  }
}

export const peopleAttending = (eventId, attending) => {
  return(dispatch) => {
    $.ajax({
      url: `/api/events/${eventId}`,
      type: 'PUT',
      dataType: 'JSON',
      data: { events: { attending } }
    }).done( userEvent => {
      dispatch({ type: 'PEOPLE_ATTENDING', userEvent })
    }).fail( data => {
      console.log(data)
    });
  }
}

export const searchQuery = (query) => {
  return(dispatch) => {
    $.ajax({
      url: '/api/search_events',
      type: 'GET',
      data: { query }
    }).done( events => {
      dispatch({ type: 'SEARCH_RESULTS', events});
    }).fail( data => {
      console.log(data);
    })
  }
}

export const editUserEventCard = (id, name, sport, date, time, capacity, venue,
                            street, city, state, zip, skill_level, description, active ) => {
 return(dispatch) => {
   $.ajax({
     url: `/api/events/${id}`,
     type: 'PUT',
     dataType: 'JSON',
     data: { events: {name, sport, date, time, capacity, venue,
     street, city, state, zip, skill_level, description, active}}
   }).done(userEvent => {
     dispatch({ type: 'EDIT_USER_EVENT', userEvent });
   }).fail(data => {
     console.log(uesrEvent);
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
