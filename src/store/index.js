import {createStore , combineReducers, applyMiddleware} from 'redux';
import { thunk } from 'redux-thunk';
import { bankReducer } from './reducers/bankReducer';
import { productsReducer } from './';

const appReducer = combineReducers({
    bank : bankReducer,
    products : productsReducer
})

export const store = createStore(appReducer,applyMiddleware(thunk));
