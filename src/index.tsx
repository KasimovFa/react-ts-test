import React from 'react';
import ReactDOM from 'react-dom';
import {setupReducer} from './store/store';
import App from './App';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

const store = setupReducer();
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);
