import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { Provider } from 'react-redux';
import AppContainer from './components/AppContainer';
import store from './store';

var App = () => (
    <Provider store={store}>
        <AppContainer />
    </Provider>
);

render(<App />, document.getElementById('root'));