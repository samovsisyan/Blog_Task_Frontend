import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


/*CSS BLOG START*/
import "./assets/blog_css/css/bootstrap/bootstrap-grid.css";
import "./assets/blog_css/css/bootstrap/bootstrap-reboot.css";
import "./assets/blog_css/css/aos.css";
import "./assets/blog_css/css/bootstrap.min.css";
import "./assets/blog_css/css/bootstrap-datepicker.css";
import "./assets/blog_css/css/magnific-popup.css";
import "./assets/blog_css/css/owl.theme.default.min.css";
import "./assets/blog_css/css/style.css";
import "./assets/grid/display_grid.css";
/*CSS BLOG END*/


/*CSS LOGIN START*/
import "./assets/login_css/css/main.css";
import "./assets/login_css/css/util.css";
import "./assets/login_css/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/login_css/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "./assets/login_css/vendor/bootstrap/css/bootstrap.css";
import "./assets/login_css/vendor/bootstrap/css/bootstrap-grid.css";
import "./assets/login_css/vendor/bootstrap/css/bootstrap-reboot.css";
import "./assets/login_css/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/login_css/vendor/bootstrap/css/bootstrap-grid.min.css";
import "./assets/login_css/vendor/bootstrap/css/bootstrap-reboot.min.css";
/*CSS LOGIN END*/


/*CSS REGISTRATION START*/

import "./assets/registration/css/main.css";
import "./assets/registration/css/main.min.css";
import "./assets/registration/vendor/select2/select2.min.css";
import "./assets/registration/vendor/datepicker/daterangepicker.css";
import "./assets/registration/vendor/font-awesome-4.7/css/font-awesome.css";
import "./assets/registration/vendor/font-awesome-4.7/css/font-awesome.min.css";
import "./assets/registration/vendor/mdi-font/css/material-design-iconic-font.css";
import "./assets/registration/vendor/mdi-font/css/material-design-iconic-font.min.css";

/*CSS REGISTRATION END*/




import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {Provider} from 'react-redux';

import reducers from './store/reducers';
import sagas from './store/sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);

// then run the saga
sagaMiddleware.run(sagas);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
