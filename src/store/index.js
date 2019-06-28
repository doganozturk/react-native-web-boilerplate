import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { helloReducer } from '@/modules/hello/reducers';

/* eslint-disable no-underscore-dangle */
export default function configureStore(initialState) {
    return createStore(
        combineReducers({
            hello: helloReducer,
        }),
        initialState,
        compose(
            applyMiddleware(thunk),
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
        ),
    );
}
