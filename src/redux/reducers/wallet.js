import { CURRENCIES } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITTIAL_STATE = {
  currencies: [],
};

const currenciesReducer = (state = INITTIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCIES:
    console.log(action);
    return {
      ...state,
      currencies: action.payload,
    };
  default:
    return state;
  }
};

export default currenciesReducer;
