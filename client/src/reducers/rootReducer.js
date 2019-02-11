import { combineReducers } from 'redux';

import formReducer from './formReducer';
import userReducer from './userReducer';
import templatesReducer from './templatesReducer';
import recipientsReducer from './recipientsReducer';
import responseReducer from './responseReducer';
import emailGroupsReducer from './emailGroupsReducer';

const rootReducer = combineReducers({
  userReducer,
  formReducer,
  templatesReducer,
  recipientsReducer,
  responseReducer,
  emailGroupsReducer,
});

export default rootReducer;
