import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginUser } from './../../redux/actions/auth.action';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/icon.laura.svg';
import ButtonCustom from '../../components/button/button-component';
import './login.css';

const Login = ({ dispatchLoginAciton }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatchLoginAciton(
      email,
      password,
      () => console.log('Logged'),
      (message) => console.log(`Error: ${message}`)
    );
  };

  return (
    <div className="login-container">
      <div className="login-container__form">
        <Logo className="login-logo" />
        <form onSubmit={handleOnSubmit} className="login-container__fields">
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
          <ButtonCustom
            onClick={handleOnSubmit}
            title="Entrar"
            className="login"
          />
          <Link to="/register" className="login-links">
            Cadastrar uma conta
          </Link>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatchLoginAciton: (email, password, onSuccess, onError) =>
    dispatch(loginUser({ email, password }, onSuccess, onError)),
});

export default connect(null, mapDispatchToProps)(Login);
