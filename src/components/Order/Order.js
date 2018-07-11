import React from 'react';
// import PropTypes from 'prop-types';
import formatPrice from '../../helpers';
import './Order.css';

class Order extends React.Component {

  renderOrder = (key) => {
    const fish = this.props.fishes.find(x => x.id === key);
    const count = this.props.order[key];
    const xClickFunction = () => {
      this.props.removeFromOrder(key);
    };
    return (
      <li
        key={key}
        className="text-left"
      >
        <div className="col-xs-2 count">{count} lbs</div>
        <div className="col-xs-5">{fish.name}</div>
        <div className="col-xs-3">{formatPrice(fish.price)}</div>
        <div className="col-xs-2">
          <button className="btn btn-default" onClick={xClickFunction}>&times;</button>
        </div>
      </li>
    );
  }
  render () {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes.find(x => x.id === key);
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';
      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    }, 0);
    return (
      <div className="Order">
        <h2>Order</h2>
        <ul>
          {orderIds.map(this.renderOrder)}
          <div className="total">Total:<strong>{formatPrice(total)}</strong></div>
          <button className="btn btn-default">Save Order</button>
        </ul>
      </div>
    );
  }
}

export default Order;
