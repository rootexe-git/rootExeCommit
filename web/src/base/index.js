import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './../landingPage';
import bitbucket from './../landingPage/bitbucketCallback';
import NotFound from './404';

class Base extends Component {
    render() {
        return (
            <div className="base">
                <Switch>
                    <Route exact path='/' component={LandingPage} />
                    <Route exact path='/bitbucket/callback' component={bitbucket} />
                    <Route component={NotFound}/>
                </Switch>
            </div>
        );
    }
}

export default Base;