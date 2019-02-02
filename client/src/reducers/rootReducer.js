import { combineReducers } from 'redux';

import formReducer from './formReducer';
import userReducer from './userReducer';
import templatesReducer from './templatesReducer';

const rootReducer = combineReducers({
  userReducer,
  formReducer,
  templatesReducer,
});

export default rootReducer;
