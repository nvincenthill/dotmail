import { combineReducers } from 'redux';

import formReducer from './formReducer';
import userReducer from './userReducer';
import templatesReducer from './templatesReducer';
import recipientsReducer from './recipientsReducer';
import responseReducer from './responseReducer';

const rootReducer = combineReducers({
  userReducer,
  formReducer,
  templatesReducer,
  recipientsReducer,
  responseReducer,
});

export default rootReducer;
