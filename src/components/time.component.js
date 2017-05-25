import React from 'react';

class Time extends React.Component {
	constructor() {
		super();

		this.state = {
			time: new Date(),
			dateFormat: 12
		};

		const sync = setInterval(function() {
			let date = new Date();
			if (date.getMilliseconds() > 10) {
				return;
			} else {
				clearInterval(sync);
				this.setState({time: new Date()});
				setInterval(() => this.setState({time: new Date()}), 1000)
			}
		}.bind(this), 1);
	}

	changeDateFormat(format) {
		this.setState({dateFormat: format});
	}

	expand() {
		this.setState({expanded: true});
	}

	collapse() {
		this.setState({expanded: false})
	}

	render() {
		var time = this.state.time,
			hours = time.getHours(),
			formattedHours = this.state.dateFormat === 24
				? hours
				: hours <= 12
					? hours
					: hours - 12,
			minutes = time.getMinutes(),
			seconds = time.getSeconds();

		const dateStyle = this.state.expanded
			? expandedStyle
			: collapsedStyle;

		return (
			<div className="date-container" onMouseEnter={() => this.expand()} onMouseLeave={() => this.collapse()}>
				<div>
					{formattedHours}:{minutes > 9
						? minutes
						: '0' + minutes}:{seconds > 9
						? seconds
						: '0' + seconds}
				</div>
				<div className="date-format-button-container" style={dateStyle}>
					<div format="12" className={`date-format-button ${this.state.dateFormat === 12
						? 'active'
						: ''}`} onClick={() => this.changeDateFormat(12)}
            style={this.state.expanded ? {opacity: 1}	: {opacity: 0}}>
						12
					</div>
					<div format="24" className={`date-format-button ${this.state.dateFormat === 24
						? 'active'
						: ''}`} onClick={() => this.changeDateFormat(24)}
            style={this.state.expanded ? {opacity: 1}	: {opacity: 0}}>
						24
					</div>
				</div>
			</div>
		);
	}
}

// ******
// Styles
// ******
const expandedStyle = {
		height: '1em',
		marginTop: '5px'
	},
	collapsedStyle = {
		height: 0,
		marginTop: 0
	};

export default Time;
