import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getChamadaApi, { addInfo } from '../redux/actions';

class WalletForm extends Component {
  state = {
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    await dispatch(getChamadaApi());
  }

  getCurrencies = async () => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    return data;
  };

  clearInput = () => {
    this.setState({
      value: '',
      description: '',
    });
  };

  handleClick = async (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    const { id } = this.state;
    this.setState({
      id: id + 1,
    });
    dispatch(addInfo({
      ...this.state,
      exchangeRates: await this.getCurrencies(),
    }));
    this.clearInput();
  };

  handleChange = ({ target:
  { value, name } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { description, currency, method, tag, value, id } = this.state;
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value-input">
          Valor:
          <input
            id={ id }
            data-testid="value-input"
            type="number"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            id={ id }
            data-testid="description-input"
            type="text"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currencie">
          Moeda:
          <select
            id={ id }
            data-testid="currency-input"
            name="currency"
            value={ currency }
            onChange={ this.handleChange }
          >
            { currencies.map((currencie) => (
              <option key={ currencie } value={ currencie }>
                {currencie}
              </option>
            )) }
          </select>
        </label>
        <label htmlFor="name">
          Método de pegamento:
          <select
            id={ id }
            data-testid="method-input"
            name="method"
            value={ method }
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de débito">Cartão de débito</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
          </select>
        </label>
        <label htmlFor="name">
          Categoria:
          <select
            id={ id }
            data-testid="tag-input"
            name="tag"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          type="submit"
          onClick={ this.handleClick }
        >
          Adicionar Despesa

        </button>
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
