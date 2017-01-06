import React from 'react';
import { connect } from 'react-redux';
import { refreshLogin } from '../actions/auth';
import { setFlash } from '../actions/flash';
import NavBar from './Navbar';
import store, { history } from '../store';

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
  }

  handleSubmit(e) {
    e.preventDefault();
    let { username, first_name, last_name, email, dob, phone_number, favorite, password, password_confirmation } = this.refs;
    let user = { user: {
      username: username.value,
      first_name: first_name.value,
      last_name: last_name.value,
      email: email.value,
      dob: dob.value,
      phone_number: phone_number.value,
      favorite: favorite.value,
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
      <div className='signup-background'>
        <NavBar history={history}/>
        <div className='right'>
          <div className='row'>
            <div className='col s12 center'>
                <h3>Welcome To GameOn!</h3>
              </div>
            </div>
            <form onSubmit={this.handleSubmit}>

            <div className='row'>
              <div className='col s12 center'>
                <label> Username </label>
                <input className='placeholder' ref="username" />
              </div>
            </div>

            <div className='row'>
              <div className='col s6'>
                <label> First Name </label>
                <input className='placeholder' ref="first_name" required={true} />
              </div>
              <div className='col s6'>
                <label> Last Name </label>
                <input className='placeholder' ref="last_name" required={true} />
              </div>
            </div>

            <div className='row'>
              <div className='col s6'>
                <label> DOB </label>
                <input type='date' className='datepicker placeholder' ref="dob" required={true} />
              </div>
              <div className='col s6'>
                <label> Phone Number </label>
                <input className='placeholder' type='tel' ref="phone_number" />
              </div>
            </div>

            <div className='row'>
              <div className='col s6'>
                <label> Favorite Sport </label>
                <input className='placeholder' ref="favorite" />
              </div>
              <div className='col s6'>
                <label> Email </label>
                <input className='placeholder' type="email" ref="email" required={true} />
              </div>
            </div>

            <div className='row'>
              <div className='col s6'>
                <label> Password </label>
                <input className='placeholder' type="password" ref="password" required={true} />
              </div>
              <div className='col s6'>
                <label> Confirm Password </label>
                <input className='placeholder' type="password" ref="password_confirmation" required={true} />
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
                <button className="btn blue">Sign Up</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default connect()(SignUp);
