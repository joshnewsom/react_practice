import React from 'react';

import Header from './header.component';
import Content from './content.component';

class App extends React.Component {
	constructor() {
		super();

		this.onLoginSuccess = this.onLoginSuccess.bind(this);
		this.logout = this.logout.bind(this);

		this.state = {
			user: window.user || 'guest'
		};
	}

	onLoginSuccess(username) {
		console.log('success!');
		this.setState({user: username});
	}

	logout() {
		console.log('logout!');
		this.setState({user: 'guest'});
	}


	render() {
		return (
			<section>
				<Header user={this.state.user} logout={this.logout}/>
				<Content onLoginSuccess={this.onLoginSuccess} user={this.state.user}/>
			</section>
		)
	}
}

export default App;
