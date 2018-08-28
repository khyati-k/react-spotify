import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers/index';

const logger = createLogger();
const createStoreWithMiddleWare = applyMiddleware(logger)(createStore);

export default function configStore(initialState) {
  return createStoreWithMiddleWare(rootReducer, initialState);
}