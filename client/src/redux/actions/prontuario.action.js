import * as constants from '../constants';

export const fetchAllProntuarios = () => ({
  type: constants.API,
  payload: {
    method: 'GET',
    url: '/api/prontuario',
    success: (response) => setAllProntuarios(response),
  },
});

export const getProntuarioById = (prontuarioId, onSucess) => ({
  type: constants.API,
  payload: {
    method: 'GET',
    url: `/api/prontuario/${prontuarioId}`,
    postProcessSuccess: onSucess,
  },
});

export const updateProntuarioById = (
  prontuarioId,
  data,
  onSuccess,
  onError
) => ({
  type: constants.API,
  payload: {
    method: 'PUT',
    url: `/api/prontuario/addEvolucao/${prontuarioId}`,
    data,
    success: (prontuarioId, data) => updateProntuario(prontuarioId, data),
    postProcessSuccess: onSuccess,
    postProcessSuccess: onError,
  },
});

const setAllProntuarios = (data) => ({
  type: constants.FETCH_PRONTUARIOS,
  payload: data,
});

const updateProntuario = (prontuarioId, data) => ({
  type: constants.EDIT_PRONTUARIO,
  payload: { prontuarioId, data },
});
