import React from 'react';
import axios from 'axios';

class Login extends React.Component {
	constructor() {
		super();
		this.signup = this.signup.bind(this);
		this.login = this.login.bind(this);
		this.handleUsernameInput = this.handleUsernameInput.bind(this);
		this.handlePasswordInput = this.handlePasswordInput.bind(this);

		this.state = {
			username: '',
			password: '',
			error: null
		};
	}

	componentDidMount() {
		this.setState({style: inbound});
		setTimeout(() => {
			this.setState({style: arrived})
		});
	}

	signup(e) {
		e.preventDefault();
		axios.post('/signup', {data: this.state}).then(function(response) {
			console.log('response:', response);
		});
	}

	login(e) {
		e.preventDefault();
		axios.post('/login', {
			data: {
				username: this.state.username,
				password: this.state.password
			}
		}).then((response) => {
			console.log('response:', response);
			this.setState({style: outbound});
			setTimeout(() => {
				this.props.onLoginSuccess(response.data);
			}, 250);
		}, (err) => {
			this.setState({error: 'Invalid username and password combination.'});
		});
	}

	handleUsernameInput(e) {
		this.setState({username: e.target.value});
	}

	handlePasswordInput(e) {
		this.setState({password: e.target.value});
	}

	render() {
		return (
			<form id="login-form" className="login-form" name="login-form" style={this.state.style}>
				<span>{this.state.error}</span>
				<div>
					<label htmlFor="username">Username</label>
					<input id="username" type="text" value={this.state.username} onChange={this.handleUsernameInput}></input>
				</div>

				<br/>

				<div>
					<label htmlFor="password">Password</label>
					<input id="password" type="password" value={this.state.password} onChange={this.handlePasswordInput}></input>
				</div>

				<br/>

				<button onClick={this.login}>Log In</button>
				<button onClick={this.signup}>Sign Up</button>
			</form>
		);
	}
}

export default Login;

const test = (
	<h1>This is a test!</h1>
);

const inbound = {
	left: '-100%'
};
const arrived = {
	left: '0'
};
const outbound = {
	left: '100%'
};
