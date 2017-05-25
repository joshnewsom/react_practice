import React from 'react';

import AddChore from './add-chore.component.js';
import ListChores from './list-chores.component.js';

class Chores extends React.Component {
  constructor() {
    super();

    this.addChore = this.addChore.bind(this);
    this.listChores = this.listChores.bind(this);

    this.state = {
      action: 'list'
    };
  }

  addChore(e) {
    e.preventDefault();
    this.setState({
      action: 'add'
    });
  }

  listChores() {
    this.setState({
      action: 'list'
    });
  }

  render() {
    switch (this.state.action) {
      case 'list':
        return (
          <ListChores addChore={this.addChore}/>
        )
        break;
      case 'add':
        return (
          <AddChore user={this.props.user} listChores={this.listChores}/>
        );
        break;
    }
  }
}

export default Chores;
