import React, { Component } from 'react';

class WalletForm extends Component {
  render() {
    return (
      <div>
        WalletForm
        <input
          data-testid="value-input"
          type="number"
        />
        <input
          data-testid="description-input"
          type="text"
        />
        <select data-testid="currency-input">

        </select>
      </div>
    );
  }
}

export default WalletForm;
