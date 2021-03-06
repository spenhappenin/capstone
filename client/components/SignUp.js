import React from 'react';
import { connect } from 'react-redux';
import { refreshLogin } from '../actions/auth';
import { setFlash } from '../actions/flash';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    $('.datepicker').pickadate({
      selectMonths: true,
      selectYears: 200
    });
    $('select').material_select();
    $('body').css('background-image', "url(https://res.cloudinary.com/omash612/image/upload/c_scale,w_2131/v1483683226/artsyBasketball_ysrsox.jpg)");
    $('body').css('background-size', 'cover');
    $('body').css('background-repeat', 'no-repeat');
    $('body').css('height', '100vh');
  }

  handleSubmit(e) {
    e.preventDefault();
    let { first_name, last_name, email, password, password_confirmation } = this.refs;
    let user = { user: {
      first_name: first_name.value,
      last_name: last_name.value,
      email: email.value,
      password: password.value,
      password_confirmation: password_confirmation.value
    }}

    $.ajax({
      url: '/users',
      type: 'POST',
      data: user,
      dataType: 'JSON'
    }).done( user => {
      this.props.dispatch(refreshLogin(user));
      this.props.history.push('/userEvents');
    }).fail( err => {
      let message = JSON.parse(err.responseText);
      let error = '';
      Object.keys(message.errors).forEach(function(key) {
        error += `${key} ${message.errors[key][0]}. `;
      });
      this.props.dispatch(setFlash(error, 'error'));
    });
  }

  render() {
    return (
      <div className='right'>
        <div className='row'>
          <div className='col s12 center'>
              <h3 className='big' style={{color: '#26c5f0'}}>Welcome To PUG!</h3>
            </div>
          </div>

          <form onSubmit={this.handleSubmit}>
          <div className='row'>
            <div className='col s6'>
              <label> First Name </label>
              <input className='placeholder black-text' ref="first_name" required={true} />
            </div>
            <div className='col s6'>
              <label> Last Name </label>
              <input className='placeholder black-text' ref="last_name" required={true} />
            </div>
          </div>

          <div className='row'>
            <div className='col s12'>
              <label className='center'> Email </label>
              <input className='placeholder black-text' type="email" ref="email" required={true} />
            </div>
          </div>

          <div className='row'>
            <div className='col s6'>
              <label> Password </label>
              <input className='placeholder black-text' type="password" ref="password" required={true} />
            </div>
            <div className='col s6'>
              <label> Confirm Password </label>
              <input className='placeholder black-text' type="password" ref="password_confirmation" required={true} />
            </div>
          </div>

          <div className='row'>
            <p className='center'>Would you like to receive event notifications? </p>
            <div className='col s2 offset-s4'>
              <input type="checkbox" className="filled-in blue" id="filled-in-box" defaultChecked="checked" />
              <label htmlFor="filled-in-box">Email</label>
            </div>
            <div className='col s2'>
              <input type="checkbox" className="filled-in blue" id="filled-in-checkbox" defaultChecked="checked" />
              <label htmlFor="filled-in-checkbox">Text</label>
            </div>
          </div>

          <div className='row'>
            <div className='col s12 center'>
              <button className="btn blue" style={{marginTop: '15px'}}>Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default connect()(SignUp);
