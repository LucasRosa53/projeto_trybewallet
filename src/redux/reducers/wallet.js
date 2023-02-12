import { CURRENCIES, ADD_INFO } from '../actions';
// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITTIAL_STATE = {
  currencies: [],
  expenses: [],
};

const currenciesReducer = (state = INITTIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  case ADD_INFO:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
};

export default currenciesReducer;
