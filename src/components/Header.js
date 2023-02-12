import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  sum = (array) => {
    let totalSum = 0; /* somas totais das despesas */
    for (let index = 0; index < array.length; index += 1) {
      const currencies = array[index].currency;
      console.log(array[index]);
      const sumOfPrice = array[index].exchangeRates[currencies].ask * array[index].value;
      totalSum += sumOfPrice; /* Number(array[index].value); */
    }
    return totalSum.toFixed(2);
    // console.log(`somatotaldosvalores, ${totalSum}`);
  };

  render() {
    const { email, expenses } = this.props;
    return (
      <div>
        <p
          data-testid="email-field"
        >
          Email:
          { email }
        </p>
        <p data-testid="total-field">
          { this.sum(expenses) }
        </p>
        <p data-testid="header-currency-field">
          Moeda: BRL
        </p>

      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});
Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps)(Header);
