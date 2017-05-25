import React from 'react';
import axios from 'axios';

class ListChores extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {

  }

  render() {
    return (
      <div>
        <h1>List Chores!</h1>
        <button onClick={this.props.addChore}>Add Chore</button>
      </div>
    )
  }
}

export default ListChores;
