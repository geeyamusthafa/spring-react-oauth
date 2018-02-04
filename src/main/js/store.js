import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { userSaga, userReducer } from './reducers/user-reducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    userReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(userSaga);

export default store;