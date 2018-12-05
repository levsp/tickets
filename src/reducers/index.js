import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { ticket } from './ticket.reducer';




const rootReducer = combineReducers({
    ticket
});

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,  //async dispatch
        createLogger()
    )
);