import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import cardReducer from './reducer';


export default createStore(cardReducer, applyMiddleware(promiseMiddleware));