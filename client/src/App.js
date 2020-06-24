import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import Evolucao from './pages/evolucao';

import './App.css';

const App = ({ user }) => {
  return (
    <React.Fragment>
      <div className="app">
        {!user.isLoggedIn ? (
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Redirect to="/login" />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/evolucao/:prontuarioId" component={Evolucao} />
            <Redirect to="/" />
          </Switch>
        )}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps)(App);
