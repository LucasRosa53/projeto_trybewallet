import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getChamadaApi from '../redux/actions';

class WalletForm extends Component {
  async componentDidMount() {
    const { dispatch } = this.props;
    await dispatch(getChamadaApi());
  }

  render() {
    const { currencies } = this.props;
    console.log(this.props);
    return (
      <form>
        <label htmlFor="name">
          Valor:
          <input
            data-testid="value-input"
            type="number"
          />
        </label>
        <label htmlFor="name">
          Descrição:
          <input
            data-testid="description-input"
            type="text"
          />
        </label>
        <label htmlFor="name">
          Moeda:
          <select data-testid="currency-input">
            { currencies.map((currencie) => (
              <option key={ currencie } value={ currencie }>
                {currencie}
              </option>
            )) }
          </select>
        </label>
        <label htmlFor="name">
          Método de pegamento:
          <select data-testid="method-input">
            <option value="dinheiro">Dinheiro</option>
            <option value="débito">Cartão de débito</option>
            <option value="crédito">Cartão de crédito</option>
          </select>
        </label>
        <label htmlFor="name">
          Categoria:
          <select data-testid="tag-input">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
        <button type="submit">Adicionar Despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(WalletForm);
