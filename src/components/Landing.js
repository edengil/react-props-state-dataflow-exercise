import React, { Component } from 'react';

class Landing extends Component {


    render() {
        return (<div>
            Welcome {this.props.user}. The hottest item is: {this.props.store.map(w =><div>{w.item} for ${w.price}</div>)} 

        </div>)
    }
}

export default Landing