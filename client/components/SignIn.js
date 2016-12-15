import React from 'react';
import { connect } from 'react-redux';
import { refreshLogin } from '../actions/auth';

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
    }).fail( err => {
      let message = err.responseJSON.error;
      this.props.dispatch(setFlash(message, 'error'))
    });
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
      </div>
    )
  }

}

export default connect()(SignIn);