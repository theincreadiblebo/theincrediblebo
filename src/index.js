import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./App.css";
import * as serviceWorker from './serviceWorker';

import configureStore from './stores/configureStore';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import { firebase } from './firebase/firebase';

import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import { history } from './routers/AppRouter';


const store = configureStore();

let hasRendered = false;

const jsx = (
    <Provider store = {store} >
        <AppRouter />
    </Provider>
);

const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('root'));
        hasRendered = true;
    }
};


firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
        });

        if(history.location.pathname === "/") {
            history.push("/dashboard");
        };

        console.log(store.getState());
        // console.log("Logged in");
    } else {
        store.dispatch(logout());
        renderApp();
        history.push("/");

        console.log(store.getState());
    // console.log("Logged out");
    }
    
});


ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));
serviceWorker.unregister();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

