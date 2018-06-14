import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import Main from './app/components/Main.jsx';
import Contact from './app/components/Contact.jsx';
import Header from './app/components/Header.jsx';

ReactDOM.render(
    <Router history={hashHistory}>
            <IndexRoute component={Header} />
            <Route path="/" component={Main} />
            <Route path="contact" component={Contact} />
    </Router>,
    document.getElementById('app')
);