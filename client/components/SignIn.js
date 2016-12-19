import React from 'react';
import { connect } from 'react-redux';
import { refreshLogin, handleFacebookLogin } from '../actions/auth';
import FacebookLogin from 'react-facebook-login';
// import { handleFacebookLogin } from '../actions/handleFacebookLogin';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let { email, password } = this.refs;
    let user = { user: {
      email: email.value,
      password: password.value
    }}

    $.ajax({
      url: '/users/sign_in',
      type: 'POST',
      dataType: 'JSON',
      data: user
    }).done( user => {
      this.props.dispatch(refreshLogin(user));
      this.props.history.push("/dashboard")
    }).fail( data => {
      console.log(data);
      // let message = err.responseJSON.error;
      // this.props.dispatch(setFlash(message, 'error'))
    });
  }

  responseFacebook = (auth) => {
    this.props.dispatch(handleFacebookLogin(auth, this.props.history))
  }

  render() {
    return (
      <div className='container center'>
        <h2 className="center">Login</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="email" required={true} ref="email" placeholder="email" />
          <input type="password" required={true} ref="password" placeholder="password" />
          <button className="btn">Login</button>
        </form>

        <FacebookLogin  
          appId = '1653601048266232'
          autoLoad = { false }
          fields = 'name, email'
          cssClass='fa-facebook'
          icon='fa-facebook'
          callback={this.responseFacebook} />
      </div>
    )
  }

}


export default connect()(SignIn);







