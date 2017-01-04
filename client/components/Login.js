import React from 'react';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';

class Login extends React.Component {
	constructor(props) {
		super(props);
		const redirectLocation = '/'
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = { error: false, redirectRoute: redirectLocation }
	}

	responseFacebook = (auth) => {
		this.props.dispatch(handleFacebookLogin(auth, this.props.history))
	}

	handleSubmit(e) {
		e.preventDefault();
		const email = this.refs.email.value;
		const password = this.refs.password.value;
		this.props.dispatch(handleLogin(
													email, password, this.state.redirectRoute,
													this.props.history
												));
	}

	render() {
		return(
			<div>
				<h3>Login</h3>
				<form onSubmit={ (e) => this.handleSubmit(e) }>
					<input type='text' ref='email' placeholder='Email' required />
					<input type='password' ref='password' placeholder='Password' required />
					<input type='submit' className='btn' value='Login' />
				</form>

				<hr />

				<FacebookLogin
					appId = 'FACEBOOK APP ID'
					autoLoad = { false }
					fields = 'name, email'
					cssClass='fa-facebook'
					icon='fa-facebook'
					callback={this.responseFacebook} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { auth: state.auth.api_key }
}

export default connect(mapStateToProps, null)(Login);
