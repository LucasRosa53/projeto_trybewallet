import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../components/WalletForm';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('testando componente wallet form', () => {
  test('Verifica se tem um botão para adicionar as despesas', () => {
    renderWithRouterAndRedux(<App />);
    const valor = screen.getByTestId('value-input');
    userEvent.type(valor, '2323');
    const descricao = screen.getByTestId('description-input');
    userEvent.type(descricao, 'sadsds');
    const botao = screen.getByRole('button', { name: /adicionar despesa/i });
    expect(botao).toBeInTheDocument();
    userEvent.click(botao);
  });
});
