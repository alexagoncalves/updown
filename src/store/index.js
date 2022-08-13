import { createStore, compose } from 'redux';

import reducers from 'src/reducers';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(
 
  )

const store = createStore(
  reducers,
  enhancers
);

export default store;