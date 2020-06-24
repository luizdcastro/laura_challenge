import * as constants from '../constants';

export default function prontuariosReducer(state = [], action) {
  switch (action.type) {
    case constants.FETCH_PRONTUARIOS:
      return action.payload;
    case constants.EDIT_PRONTUARIO:
      return state.map((item) => {
        if (item._id === action.payload.prontuarioId)
          return { ...item, ...action.payload.data };
        else return item;
      });
    case constants.RESET_USER_INFO:
      return [];
    default:
      return state;
  }
}
