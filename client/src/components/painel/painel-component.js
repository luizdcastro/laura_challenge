import React, { useState, useEffect } from 'react';
import { IoMdArrowRoundDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/search-bar/search-bar-component';
import iconback from '../../assets/icon-left.png';
import iconext from '../../assets/icon-right.png';

import './painel-styles.css';

const Painel = ({ prontuarios }) => {
  const [details, setDetails] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredProntuarios, setFilteredProntuarios] = useState([]);
  const [currentPage, setCurrentPage] = useState(2);
  const [postPerPage, setPostPerPage] = useState(10);

  // Pagination
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(filteredProntuarios.length / postPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    setFilteredProntuarios(
      prontuarios.slice(indexOfFirstPost, indexOfLastPost)
    );
  }, [prontuarios, indexOfFirstPost, indexOfLastPost]);

  // Toggle button "resumo do alerta"
  const toggleShow = (id) => {
    const showState = details.slice();
    const index = showState.indexOf(id);
    if (index >= 0) {
      showState.splice(index, 1);
      setDetails(showState);
    } else {
      showState.push(id);
      setDetails(showState);
    }
  };

  // Search bar filter
  useEffect(() => {
    setFilteredProntuarios(
      prontuarios.filter(
        (prontuario) =>
          prontuario.paciente.name
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          prontuario.alerta.toLowerCase().includes(search.toLowerCase()) ||
          prontuario.id.toString().includes(search.toLowerCase()) ||
          prontuario.atendimento.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, prontuarios]);

  // Painel component
  return (
    <div className="table-container">
      <div className="table-header">
        <div className="header-title">
          <p className="header-name">
            Prontuário
            <span id="prontuario-counter"> ({filteredProntuarios.length})</span>
          </p>
          <IoMdArrowRoundDown className="header-icon" />
        </div>
        <div className="header-title separator">
          <p className="header-name">Nome do paciente</p>
          <IoMdArrowRoundDown className="header-icon" />
        </div>
        <div className="header-title">
          <p className="header-name">Nível do alerta</p>
          <IoMdArrowRoundDown className="header-icon" />
        </div>
        <div className="header-title">
          <p className="header-name">Data do alerta</p>
          <IoMdArrowRoundDown className="header-icon" />
        </div>
        <div className="header-title">
          <p className="header-name">Atendimento</p>
          <IoMdArrowRoundDown className="header-icon" />
        </div>
      </div>

      <SearchBar onChange={(e) => setSearch(e.target.value)} />

      {filteredProntuarios.map((item) => (
        <React.Fragment key={item._id}>
          <div className="table-content build-list">
            <div className="content-title">
              <p className="content-text-light ">{item.id}</p>
            </div>
            <div className="content-title separator">
              <p className="content-text-bold ">{item.paciente.name}</p>
            </div>
            <div className="content-title">
              <p className={`alerta-${item.alerta}`}>{item.alerta}</p>
            </div>
            <div className="content-title">
              <p className="content-text-light">{item.createdAt}</p>
            </div>
            <div className="content-title separator">
              <p className={`atendimento-${item.atendimento}`}>
                {item.atendimento}
              </p>
            </div>
            <div className="content-title">
              <Link className="button-evo" to={`/evolucao/${item._id}`}>
                Registrar Evolução
              </Link>
            </div>
            <div className="content-title">
              <button
                className="button-resumo"
                onClick={() => toggleShow(item._id)}
              >
                Resumo do Alerta
              </button>
            </div>

            {details.includes(item._id) && (
              <div className="expanded-sintomas">
                <ul className="sintomas-area">
                  <h4 className="sintomas-title">
                    Sintomas do alerta {item.alerta}:
                  </h4>
                  <div className="sintomas-table">
                    <tr>
                      <th className="sintomas">Dor de cabeça</th>
                      <td className="sintomas">
                        {item.sintomas.dorDecabeca || 'Sem Sintoma'}
                      </td>
                    </tr>
                    <tr>
                      <th className="sintomas">Coceira no braço</th>
                      <td className="sintomas">
                        {item.sintomas.coceiraNoBraco || 'Sem Sintoma'}
                      </td>
                    </tr>
                    <tr>
                      <th className="sintomas">Coceira na perna</th>
                      <td className="sintomas">
                        {item.sintomas.coceiraNaPerna || 'Sem Sintoma'}
                      </td>
                    </tr>
                    <tr>
                      <th className="sintomas">Tosse</th>
                      <td className="sintomas">
                        {item.sintomas.tosse || 'Sem Sintoma'}
                      </td>
                    </tr>
                    <tr>
                      <th className="sintomas">Fraqueza nas pernas</th>
                      <td className="sintomas">
                        {item.sintomas.fraquezaPernas || 'Sem Sintoma'}
                      </td>
                    </tr>
                  </div>
                </ul>
              </div>
            )}
          </div>
        </React.Fragment>
      ))}

      <div className="pagination">
        <div className="pagination-selector">
          <p>Linhas por página:</p>
          <select
            onChange={(e) => setPostPerPage(e.target.value)}
            className="selector"
          >
            <option value="8">8</option>
            <option value="15">15</option>
            <option value="30">30</option>
          </select>
        </div>
        <div className="paginagiton-container">
          <img
            src={iconback}
            size="3px"
            className="icons-paginate icons-paginate-left"
            onClick={() => setCurrentPage(currentPage - 1)}
          />

          <div className="pagination-navigate">
            <p className="pagination-text">
              {currentPage}-{indexOfLastPost} de {filteredProntuarios.length}
            </p>
          </div>

          <img
            className="icons-paginate icons-paginate-right"
            src={iconext}
            onClick={() => setCurrentPage(currentPage + 1)}
          />
        </div>
      </div>
    </div>
  );
};

export default Painel;
