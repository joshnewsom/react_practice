import React from 'react';

import Login from './login.component';
import Chores from './chores.component';

class Content extends React.Component {
	constructor() {
    super();
		console.log('content:', this);
	}

	render() {
    if (this.props.user === 'guest' || !this.props.user) {
      return (
        <section className="content">
          <Login onLoginSuccess={this.props.onLoginSuccess} />
        </section>
      )
    } else {
      return (
        <section className="content">
          <Chores user={this.props.user}/>
        </section>
      )
    }
	}
}

export default Content;
