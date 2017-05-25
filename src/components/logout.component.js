import React from 'react';

class Logout extends React.Component {
	constructor(props) {
		super(props);
		this.onClick = () => {
			this.setState({style: inboundOutbound});
			setTimeout(() => {
				this.props.onClick();
			}, 250);
		};

		this.state = {};
	}

	componentDidMount() {
		this.setState({style: inboundOutbound});
		setTimeout(() => {
			this.setState({style: arrived});
		});
	}

	render() {
		return (
			<button className="logout-button" onClick={this.onClick} style={this.state.style}>Log Out</button>
		);
	}
}

export default Logout;

const inboundOutbound = {
	top: '-200%'
};

const arrived = {
	top: 0
};
