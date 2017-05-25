import React from 'react';

class DaysCheckboxes extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.checkboxes = days.map(mapDays.bind(this));
  }

  render() {
    return (
      <div>
        {this.checkboxes}
      </div>
    )
  }
}

export default DaysCheckboxes;


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function mapDays(day) {
  return (
    <div key={day + 'Div'}>
      <label htmlFor={day} key={day + 'Label'}>{day}</label>
      <input name={day} type="checkbox" key={day} value={day} onChange={this.props.handleDaysInput}/>
    </div>
  );
}
