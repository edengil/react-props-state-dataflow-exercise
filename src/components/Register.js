import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (<div id="register">
      <h4>Register</h4>
      {this.props.reservations.map(w=> {
        return <div key={w.name}> {w.day} @ {w.time} </div>
        })}
    </div>)
  }
}

export default Register