export const fetchUserEvents = () => {
  return(dispatch) => {
    $.ajax({
      url: '/api/userEvents',
      type: 'GET',
      dataType: 'JSON'
    }).done( userEvents => {
      dispatch({ type: 'ALL_USER_EVENTS', userEvents });
    }).fail( data => {
      console.log(data);
    });
  }
}
