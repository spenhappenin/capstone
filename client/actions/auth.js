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
        console.log(err);
      });
    }
  }
}

export const logout = (history) => {
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
    apiKey
  }
}

export const handleFacebookLogin = (auth, history) => {
  return(dispatch) => {
    $.ajax({
      url: '/facebook_login',
      type: 'POST',
      data: { auth },
      dataType: 'JSON'
    }).done( response => {
      localStorage.setItem('apiKey', response.api_key);
      localStorage.setItem('userId', response.user.id);
      dispatch(loggedIn(response.user.id, response.api_key));
      history.push('/');
    }).fail( response => {  
      dispatch(logout());
    })
  }
}