import { combineReducers } from 'redux';

import formReducer from './formReducer';
import userReducer from './userReducer';
import templatesReducer from './templatesReducer';
import recipientsReducer from './recipientsReducer';

const rootReducer = combineReducers({
  userReducer,
  formReducer,
  templatesReducer,
  recipientsReducer,
});

export default rootReducer;
