import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('verifica se existem dois inputs no login', () => {
  test('testa se existe um input de email e um input de senha', () => {
    renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByPlaceholderText('Digite o seu email');
    expect(inputEmail).toBeInTheDocument();
  });
  test('teste se existe um input de senha', () => {
    renderWithRouterAndRedux(<App />);
    const inputPasssword = screen.getByPlaceholderText('Digite a sua senha');
    expect(inputPasssword).toBeInTheDocument();
  });
  test('testa se existe um botão na tela', () => {
    renderWithRouterAndRedux(<App />);
    const button = screen.getByRole('button', { name: /entrar/i });
    expect(button).toBeInTheDocument();
  });
  test('testa se é possível digitar no campo de email', () => {
    renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByTestId('email-input');
    userEvent.type(inputEmail, 'email@email.com');
    expect(inputEmail.value).toBe('email@email.com');
  });
  test('testa se é possível digitar no campo de senha', () => {
    renderWithRouterAndRedux(<App />);
    const inputPasssword = screen.getByTestId('password-input');
    userEvent.type(inputPasssword, 'senha1');
    expect(inputPasssword.value).toBe('senha1');
  });
  test('testa se é possível clicar no botão com os campos preenchidos', () => {
    renderWithRouterAndRedux(<App />);
    const email = screen.getByTestId('email-input');
    userEvent.type(email, 'eemail@email.com');
    const passsword = screen.getByTestId('password-input');
    userEvent.type(passsword, 'senha1');
    const botaoEntrar = screen.getByRole('button', { name: /entrar/i });
    expect(botaoEntrar).toBeInTheDocument();
  });
  test('teste se ao clicar no botão de entrar é redirecionado para carteira', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByPlaceholderText('Digite o seu email');
    userEvent.type(inputEmail, 'eemail@email.com');
    expect(inputEmail).toBeInTheDocument();
    const inputPasssword = screen.getByPlaceholderText('Digite a sua senha');
    userEvent.type(inputPasssword, 'senha1');
    expect(inputPasssword).toBeInTheDocument();
    const botaoEntrar = screen.getByRole('button', { name: /entrar/i });
    expect(botaoEntrar).toBeInTheDocument();
    userEvent.click(botaoEntrar);
    const { pathname } = history.location;
    expect(pathname).toBe('/carteira');
  });
});
