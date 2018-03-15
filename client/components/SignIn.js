import React from 'react';
import { connect } from 'react-redux';
import { refreshLogin, handleFacebookLogin } from '../actions/auth';
import { setFlash } from '../actions/flash';
import FacebookLogin from 'react-facebook-login';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    $('body').css('background-image', "url(https://res.cloudinary.com/omash612/image/upload/c_scale,w_2216/v1483592932/baseballMit_vlwj1y.jpg)");
    $('body').css('background-size', 'cover');
    $('body').css('background-repeat', 'no-repeat');
    $('body').css('height', '100vh');
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

  responseFacebook = (auth) => {
    this.props.dispatch(handleFacebookLogin(auth, this.props.history))
  }

  render() {
    return (
      <div>
        <div className='row' style={{marginTop: '20px', marginRight: '15px'}}>
          <div className='offset-l3 col s12 m6 l6' style={{backgroundColor: 'rgba(237, 237, 237, 0.2)', borderRadius: '10px', paddingBottom: '15px', marginTop: '50px'}}>
            <form  onSubmit={this.handleSubmit}>
              <div className='row'>
                <div className='col s12 center'>
                  <h2 className='big' style={{color: '#26c5f0'}}>Login</h2>
                </div>
              </div>
              <div className='row'>
                <div className='col s12 right'>
                  <label className='left'> Email </label>
                  <input className='login-caret foo' id='bar' type="email" required={true} ref="email" />
                </div>
              </div>
              <div className='row'>
                <div className='col s12 right'>
                  <label className='left'> Password </label>
                  <input className='login-caret foo' type="password" id='passwordAutomation' required={true} ref="password" />
                </div>
              </div>
              <div className='row'>
                <div className='col s12 center'>
                  <input type='submit' id='submitAutomation' value='Sign In' className="btn blue" style={{marginBottom: '10px'}} />
                </div>
              </div>
              <div className='row'>
                <div className='col s12 center'>
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
          </div>
        </div>
      </div>
    )
  }

}

export default connect()(SignIn);
