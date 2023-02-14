import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { excluir } from '../redux/actions';

class Table extends Component {
  excluirButton = (id) => {
    const { dispatch, expenses } = this.props;
    const excluirFilter = expenses.filter((element) => (
      element.id !== id
    ));
    dispatch(excluir(excluirFilter));
  };

  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            { expenses.map((element) => (
              <tr key={ element.id }>
                <td>
                  { element.description }
                </td>
                <td>
                  { element.tag }
                </td>
                <td>
                  { element.method }
                </td>
                <td>
                  { Number(element.value).toFixed(2) }
                </td>
                <td>
                  { element.exchangeRates[element.currency].name }
                </td>
                <td>
                  { Number(element.exchangeRates[element.currency].ask).toFixed(2) }
                </td>
                <td>
                  { Number(element.exchangeRates[element.currency].ask
                  * Number(element.value)).toFixed(2) }
                </td>
                <td>
                  Real
                </td>
                <td>
                  <button
                    data-testid="delete-btn"
                    type="button"
                    onClick={ () => this.excluirButton(element.id) }
                  >
                    Excluir
                  </button>
                  Editar
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(Object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Table);
