import React from 'react';
import { connect } from 'react-redux';
import { refreshLogin, handleFacebookLogin } from '../actions/auth';
import { setFlash } from '../actions/flash';
import FacebookLogin from 'react-facebook-login';

$('input').attr('autocomplete','off');


class LandingSignIn extends React.Component {
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
      this.props.history.push("/userEvents")
    }).fail( err => {
      let message = err.responseJSON.error;
      this.props.dispatch(setFlash(message, 'error'))
    });
  }

  displayLogin() {
    if(!this.props.noLogin) {
      return(
        <form onSubmit={this.handleSubmit}>
          <div className='row'>
            <div className='col s6'>
              <label className='white-text'> Email </label>
              <input className='input foo white-text' id='bar' type="email" required={true} ref="email" />
            </div>
            <div className='col s6'>
              <label className='white-text'> Password </label>
              <input className='input white-text' type="password" required={true} ref="password" />
            </div>
          </div>
          <div className='row'>
            <div className='center'>
              <input type='submit' value='Sign In' className="btn blue" style={{marginBottom: '10px'}} />
            </div>
          </div>
        <div className='row'>
          <div className='center'>
            <FacebookLogin
              appId = '1653601048266232'
              autoLoad = { false }
              fields = 'name, email'
              className = 'facebook-button'
              icon = 'fa-facebook'
              callback = { this.responseFacebook } />
          </div>
        </div>
      </form>
      )
    }
  }

  responseFacebook = (auth) => {
    this.props.dispatch(handleFacebookLogin(auth, this.props.history))
  }

  render() {
    return (
      <div className='row'>
        <div className='left container landing-form'>
          <div className='col s8' style={{backgroundColor: 'rgba(8, 31, 43, 0.6)', borderRadius: '10px', paddingBottom: '15px'}}>
            <div className='row'>
              <div className='center'>
                <h2 className='big' style={{color: '#26c5f0'}}>Welcome to PUG </h2>
                <p className='small white-text' style={{fontSize: '28px'}}>The world's largest network for amateur <span style={{color: "#ff7821"}}>pick-up games.</span></p>
              </div>
            </div>
            { this.displayLogin() }
          </div>
        </div>
      </div>
    )
  }

}

export default connect()(LandingSignIn);
