import React from 'react';
import { connect } from 'react-redux';
import { refreshLogin } from '../actions/auth';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      this.props.history.push('/dashboard');
    }).fail( err => {
    });
  }

  render() {
    return (
      <div className='container center'>
        <h2 className="center">Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Username" ref="username" />
          <input placeholder="First Name" ref="first_name" required={true} />
          <input placeholder="Last Name" ref="last_name" required={true} />
          <input type='date' placeholder="Birthdate" ref="dob" required={true} />
          <input type='tel' placeholder="Phone Number" ref="phone_number" />
          <input placeholder="Favorite Sport" ref="favorite" />
          <input type="email" placeholder="Email" ref="email" required={true} />
          <input type="password" placeholder="Password" ref="password" required={true} />
          <input type="password" placeholder="Confirm Password" ref="password_confirmation" required={true} />
          <button className="btn">Sign Up</button>
        </form>
      </div>
    )
  }
}

export default connect()(SignUp);
