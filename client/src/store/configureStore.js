import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';
import async from '../middleware/async';

const composeEnhancer = process.env.REDUXDEVTOOLS || compose;

export default function configureStore() {
  return createStore(rootReducer, composeEnhancer(applyMiddleware(async)));
}
