export const ADD_EMAIL = 'ADD_EMAIL';
export const CURRENCIES = 'CURRENCIES';
export const ADD_INFO = 'ADD_INFO';
export const EXCLUIR = 'EXCLUIR';

export const excluir = (expenses) => ({
  type: EXCLUIR,
  payload: expenses,
});

export const addEmail = (email) => ({
  type: ADD_EMAIL,
  payload: email,
});

export const novoCurrencies = (moeda) => ({
  type: CURRENCIES,
  payload: moeda,
});

export const addInfo = (infos) => ({
  type: ADD_INFO,
  payload: infos,
});

const getChamadaApi = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  const remove = Object.keys(data).filter((key) => key !== 'USDT');
  dispatch(novoCurrencies(remove));
};

export default getChamadaApi;
