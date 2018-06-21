import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';

import Base from './base';

class App extends Component {
    constructor(props) {
        super(props);
        window.bitbucketApiKey = 'X4NKKSP2eyaPCcRGK9';
    }
    
    render() {
        return (
            <div className="App"><Base /></div>
        );
    }
}

export default App;
