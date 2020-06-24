import React from 'react';
import EtapaCard from '../etapa-card/etapa-card-component';
import iconEtapa1 from '../../assets/icon.etapa1.png';
import iconEtapa2 from '../../assets/icon.etapa2.png';
import iconEtapa3 from '../../assets/icon.etapa3.png';
import iconEtapa4 from '../../assets/icon.etapa4.png';
import './etapas-styles.css';

const Etapas = ({ prontuarios }) => {
  const etapas = prontuarios.map((item) => item.etapa);

  let etapaCounter = {};
  for (var i = 0, e = etapas.length; i < e; i++) {
    etapaCounter[etapas[i]] = (etapaCounter[etapas[i]] || 0) + 1;
  }

  return (
    <div className="etapa-container">
      <EtapaCard
        icon={iconEtapa1}
        counter={etapaCounter[1] || 0}
        title="Etapa 1"
      />
      <EtapaCard
        icon={iconEtapa2}
        counter={etapaCounter[2] || 0}
        title="Etapa 2"
      />
      <EtapaCard
        icon={iconEtapa3}
        counter={etapaCounter[3] || 0}
        title="Etapa 3"
      />
      <EtapaCard
        icon={iconEtapa4}
        counter={etapaCounter[4] || 0}
        title="Etapa 4"
      />
    </div>
  );
};

export default Etapas;
