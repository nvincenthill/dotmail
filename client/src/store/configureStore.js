import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export default function configureStore() {
  return createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
}
