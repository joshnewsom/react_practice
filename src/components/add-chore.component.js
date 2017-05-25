import React from 'react';
import axios from 'axios';

import DaysCheckboxes from './days-checkboxes.component';

class AddChore extends React.Component {
	constructor(props) {
		super(props);
		this.addChore = this.addChore.bind(this);
		this.handleChoreNameInput = this.handleChoreNameInput.bind(this);
		this.handleDaysInput = this.handleDaysInput.bind(this);
		this.listChores = (e) => {
			e.preventDefault();
			this.setState({style: inbound});
			setTimeout(() => {
				this.props.listChores()
			}, 250);
		}

		this.state = {
			choreName: '',
			days: []
		};
	}

	componentWillMount() {
		this.setState({style: inbound});
	}

	componentDidMount() {
		this.setState({
			style: {
				height: document.getElementById('add-chore-container').scrollHeight + 'px',
				overflow: 'hidden',
				transition: '.25s'
			}
		});
	}

	addChore(e) {
		e.preventDefault();
		axios.post('/chores', {
			data: {
				name: this.state.choreName,
				days: this.state.days,
				user: this.props.user
			}
		});
	}

	handleChoreNameInput(e) {
		this.setState({choreName: e.target.value});
	}

	handleDaysInput(e) {
		let day = e.target.value;
		let index = this.state.days.indexOf(day);
		let days = [...this.state.days];

		if (index < 0) {
			days.push(day);
		} else {
			days.splice(index, 1);
		}

		this.setState({days: days});
	}

	render() {
		return (
			<div id="add-chore-container" style={this.state.style}>
				<h3>Add Chore</h3>
				<form>
					<label htmlFor="chore-name">Name:</label>
					<input id="chore-name" type="text" name="chore-name" value={this.state.choreName} onChange={this.handleChoreNameInput}/>
					<br/>
					<DaysCheckboxes handleDaysInput={this.handleDaysInput}/>
					<br/>
					<button onClick={this.addChore}>Add Chore</button>
					<button onClick={this.listChores}>Back to list</button>
				</form>
			</div>
		);
	}
}

export default AddChore;

const inbound = {
	height: '0',
	overflow: 'hidden',
	transition: '.25s'
};
