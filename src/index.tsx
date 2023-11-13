import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HashRouter as Router} from "react-router-dom";
import {setupStore} from "./store/store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const store = setupStore()

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router basename='/'>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>
);


