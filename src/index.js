import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// import "./assets/blog_css/css/bootstrap.css";
// import "./assets/blog_css/css/bootstrap.css/bootstrap.min.css";
import "./assets/blog_css/css/bootstrap/bootstrap-grid.css";
import "./assets/blog_css/css/bootstrap/bootstrap-reboot.css";
import "./assets/blog_css/css/aos.css";
import "./assets/blog_css/css/bootstrap.min.css";
import "./assets/blog_css/css/bootstrap-datepicker.css";
// import "./assets/blog_css/css/jquery.fancybox.min.css";
// import "./assets/blog_css/css/jquery.mb.YTPlayer.min.css";
// import "./assets/blog_css/css/jquery-ui.css";
import "./assets/blog_css/css/magnific-popup.css";
// import "./assets/blog_css/css/mediaelementplayer.css";
// import "./assets/blog_css/css/owl.carousel.min.css";
import "./assets/blog_css/css/owl.theme.default.min.css";
import "./assets/blog_css/css/style.css";


import "./assets/grid/display_grid.css";
// import "./assets/blog_css/style/style.css";
// import './assets/blog_css/admin_css/css/style.css'




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
