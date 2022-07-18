import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Used to log Redux state
import logger from 'redux-logger';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const feedback = (state = [], action) => {
	switch (action.type) {
		case 'SET_FEELING_RATING':
			return [...state, action.payload]

    case 'SET_UNDERSTANDING_RATING':
      return [...state, action.payload]

    case 'SET_SUPPORT_RATING':
      return [...state, action.payload]

    case 'SET_COMMENTS':
      return [...state, action.payload]

    case'CLEAR_FEEDBACK':

		default:
			return state;

	}
};


const storeInstance = createStore(
  combineReducers({
    feedback,
  }),
  applyMiddleware(logger)
)

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();