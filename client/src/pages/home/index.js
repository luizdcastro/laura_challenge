import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/auth.action';
import { fetchAllProntuarios } from '../../redux/actions/prontuario.action';
import Header from '../../components/header/header-component';
import Etapas from '../../components/etapas/etapas-component';
import Painel from '../../components/painel/painel-component';
import './index.css';

const Home = ({
  prontuarios,
  dispatchLogutAction,
  dispatchFetchAllProntuarios,
}) => {
  const [display, setDisplay] = React.useState(true);

  const open = () => {
    setDisplay(true);
  };

  const close = () => {
    setDisplay(false);
  };

  useEffect(() => dispatchFetchAllProntuarios(), [dispatchFetchAllProntuarios]);
  return (
    <div>
      <Header onLogout={dispatchLogutAction} />
      <div className="home-container">
        <Etapas prontuarios={prontuarios} />
        <Painel prontuarios={prontuarios} />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatchLogutAction: () => dispatch(logoutUser()),
  dispatchFetchAllProntuarios: () => dispatch(fetchAllProntuarios()),
});

const mapStateToProps = (state) => ({
  prontuarios: state.prontuarios,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
