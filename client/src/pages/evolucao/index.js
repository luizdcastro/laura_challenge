import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ButtonCustom from '../../components/button/button-component';
import {
  getProntuarioById,
  updateProntuarioById,
} from '../../redux/actions/prontuario.action';

import cancelIcon from '../../assets/icon.cancelar.png';

import './evolucao.css';

const Evolucao = ({
  match,
  dispatchGetProntuarioByIdAction,
  dispatchUpdateProntuarioAction,
}) => {
  console.log(match);

  const [evolucao, setEvolucao] = useState('');

  useEffect(() => {
    const { prontuarioId } = match.params;
    if (prontuarioId) {
      dispatchGetProntuarioByIdAction(prontuarioId, ({ evolucao }) => {
        setEvolucao(evolucao);
      });
    }
  }, [dispatchGetProntuarioByIdAction, match.params]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { prontuarioId } = match.params;
    const data = { evolucao };
    dispatchUpdateProntuarioAction(prontuarioId, data);
  };

  return (
    <div className="main-container">
      <div className="evolucao-container">
        <Link to="/">
          <img src={cancelIcon} className="cancel-icon" />
        </Link>

        <h3 className="main-title">Evolução do atendimento</h3>
        <p className="sub-title">Descritivo da evolução</p>
        <form className="form-container" onSubmit={handleSubmit}>
          <input
            className="input-container"
            placeholder="Informe a evolução do paciente"
            type="text"
            name="evolucao"
            value={evolucao}
            onChange={(e) => setEvolucao(e.target.value)}
          />
          <div className="evolucao-button">
            <ButtonCustom onClick={handleSubmit} title="Registrar" event="/" />
          </div>
          <Link to="/" className="link-cancelar">
            CANCELAR
          </Link>
        </form>
      </div>
    </div>
  );
};

const mapDispathToProps = (dispatch) => ({
  dispatchUpdateProntuarioAction: (prontuarioId, data, onSuccess, onError) =>
    dispatch(updateProntuarioById(prontuarioId, data, onSuccess, onError)),

  dispatchGetProntuarioByIdAction: (prontuarioId, onSuccess) =>
    dispatch(getProntuarioById(prontuarioId, onSuccess)),
});

export default connect(null, mapDispathToProps)(Evolucao);
