export const refreshLogin = (user = null) => {
  return (dispatch) => {
    if (user) {
      dispatch(setUser(user))
    } else {
      $.ajax({
        url: '/api/users/info',
        type: 'GET',
        dataType: 'JSON'
      }).done( user => {
        dispatch(setUser(user));
      }).fail (err => {
      });
    }
  }
}

export const logout = (router) => {
  return(dispatch) => {
    $.ajax({
      url: '/users/sign_out',
      type: 'DELETE'
    }).done( () => {
      history.push('/signin');
      dispatch(setUser());
    });
  }
}

const setUser = (user = {}) => {
  return { type: 'USER', ...user }
}

export const loggedIn = (id, apiKey) => {
  return {
    type: 'LOGIN',
    id,
    apikey
  }
}

export const handleFacebookLogin = (auth, history) => {
  return(dispatch) => {
    $.ajax({
      url: '/api/facebook_login',
      type: 'POST',
      data: { auth },
      dataType: 'JSON'
    }).done( response => {
      dispatch(refreshLogin(response.user));
      history.push('/userEvents');
    }).fail( response => {
      dispatch(logout());
    })
  }
}
