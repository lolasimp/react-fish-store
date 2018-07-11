import React from 'react';
// import PropTypes from 'prop-types';

import './SingleOrder.css';
import orderRequests from '../../firebaseRequests/orders';

class SingleOrder extends React.Component {

  deleteOrderClick = () => {
    const firebaseId = this.props.match.params.id;
    console.error('id', firebaseId);
    orderRequests
      .deleteRequest(firebaseId)
      .then(() => {
        this.props.history.push('/orders');
      })
      .catch((err) => {
        console.error('error with delete', err);
      });

  };

  render () {
    return (
      <div className="SingleOrder">
        <h1>SingleOrder</h1>
        <button className="btn btn-danger" onClick={this.deleteOrderClick}>Delete Order</button>
      </div>
    );
  }
}

export default SingleOrder;
