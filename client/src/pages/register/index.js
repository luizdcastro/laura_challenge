import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/icon.laura.svg';
import { registerUser } from './../../redux/actions/auth.action';
import ButtonCustom from '../../components/button/button-component';

import './register.css';

const Register = ({ dispatchRegisterAction }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatchRegisterAction(
      name,
      email,
      password,
      () => console.log('Account created'),
      (message) => console.log(`Error: ${message}`)
    );
  };

  return (
    <React.Fragment>
      <div className="login-container">
        <div className="register-container__form">
          <Logo className="login-logo" />
          <form
            onSubmit={handleOnSubmit}
            className="login-container__fields"
            noValidate
          >
            <label className="login-label">
              Name
              <input
                className="login-input"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="login-label">
              Email
              <input
                className="login-input"
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="login-label">
              Password
              <input
                className="login-input"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <ButtonCustom onClick={handleOnSubmit} title="Registrar" />
            <Link className="login-links" to="/login">
              Já tem uma conta? Entrar
            </Link>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatchRegisterAction: (name, email, password, onSuccess, onError) =>
    dispatch(registerUser({ name, email, password }, onSuccess, onError)),
});

export default connect(null, mapDispatchToProps)(Register);
