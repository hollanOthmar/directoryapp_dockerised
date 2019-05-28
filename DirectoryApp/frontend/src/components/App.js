import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './layout/Dashboard';

import Header from './layout/Header';
import Sidenav from './layout/Sidenav';

import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
    render() {
        return (
            <Provider store = {store}>
            <div className="wrapper">
                <Sidenav />
                <div id="content">
                    <Fragment>
                        <div className="container">
                            <Header />
                            <div id="particles-js"></div>
                            <Dashboard />
                        </div>
                    </Fragment>
                </div>
            </div>
                
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'))