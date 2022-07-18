import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';



const defaultFeedback = {
    Feelings: 0,
    Understanding: 0,
    Support: 0,
    Comments: ''
}


const feedbackReview = (state = defaultFeedback, action) => {
    switch (action.type) {
		case 'FEELINGS':
			return [...state, action.payload];
        case 'UNDERSTANDING':
            return [...state, action.payload];
        case 'SUPPORT':
            return [...state, action.payload];
        case 'COMMENTS':
            return [...state, action.payload];
        case 'CLEAR':
            return defaultFeedback;
        default:
            return state;
	}
}

const storeInstance = createStore(
    combineReducers({
        feedbackReview
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

