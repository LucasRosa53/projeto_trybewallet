import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEmail } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    disable: true,
  };

  handleClick = (e) => {
    e.preventDefault();
    const { email } = this.state;
    const { dispatch, history } = this.props;
    dispatch(addEmail(email));
    history.push('/wallet');
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value }, this.validator);
  };

  validator = () => {
    const { email, password } = this.state;
    const regexEmail = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/.test(email);
    const nmrSeis = 6;
    const validatorPass = password.length >= nmrSeis;
    if (regexEmail && validatorPass === true) {
      this.setState({ disable: false });
    } else {
      this.setState({ disable: true });
    }
  };

  render() {
    const { disable } = this.state;
    return (
      <div>
        <form>
          <section>
            Login
            <input
              data-testid="email-input"
              name="email"
              type="text"
              placeholder="Digite o seu email"
              onChange={ this.handleChange }
            />
            <input
              data-testid="password-input"
              name="password"
              type="text"
              placeholder="Digite a sua senha"
              onChange={ this.handleChange }
            />
            <button
              type="submit"
              disabled={ disable }
              onClick={ this.handleClick }
            >
              Entrar
            </button>
          </section>
        </form>
      </div>
    );
  }
}
Login.propTypes = {
  history: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
