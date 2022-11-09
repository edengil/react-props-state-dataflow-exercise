import React, { Component } from 'react';

class Calendar extends Component {
  render() {
    return (
      <div id="calendar">
        <h4>Calendar</h4>
        {this.props.reservations.map(w=> {
        return <div key={w.name}>{w.name} has a reservations on {w.day} @ {w.time} </div>
        })}
      </div>
    )
  }
}

export default Calendar