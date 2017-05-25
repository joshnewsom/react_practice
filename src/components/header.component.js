import React from 'react';

import Time from './time.component';
import Logout from './logout.component';

class Header extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="header">
				<h1>Hello, {this.props.user}</h1>
				<Time/>
				{(this.props.user && this.props.user !== 'guest' ? <Logout onClick={this.props.logout}/> : null)}
			</div>
		)
	}
}

export default Header;
