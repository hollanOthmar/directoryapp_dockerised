import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './layout/Dashboard';

import Header from './layout/Header';
import Sidenav from './layout/Sidenav';
import Submit from './layout/Submit';
import Tags from './layout/Tags';

import { Provider } from 'react-redux';
import store from '../store';

import { HashRouter as Router, Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Provider store = {store}>
            <BrowserRouter>
            <div className="wrapper">
                <Sidenav />
                <div id="content">
                    
                        <Fragment>
                            {/* <div className="container"> */}
                                {/* <Header /> */}
                                <Switch >
                                    <Route exact path="/" component={Dashboard}/>
                                </Switch>
                                <Switch >
                                    <Route exact path="/submit" component={Submit}/>
                                </Switch>
                                <Switch >
                                    <Route exact path="/tags" component={Tags}/>
                                </Switch>
                                {/* <div id="particles-js"></div>
                                <Dashboard /> */}
                            {/* </div> */}
                        </Fragment>
                    
                </div>
            </div>
            </BrowserRouter>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'))