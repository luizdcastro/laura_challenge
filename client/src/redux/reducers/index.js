import { combineReducers } from 'redux';

import user from './user.reducer';
import prontuarios from './prontuario.reducer';

const rootReducer = combineReducers({ user, prontuarios });

export default rootReducer;
