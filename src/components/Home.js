import React, { Component } from 'react';
import Item from './Item';

class  Home extends Component {
    newPrice(price,discount,s){
        return s? price * (1 - discount) : price
    }
    render() {
        return (<div>
            <h2>Store</h2>

            {this.props.store.map(w => <Item item={w.item} price={this.newPrice(w.price,w.discount,this.props.shouldDiscount) }/>)}
        </div>)
    }
}

export default Home