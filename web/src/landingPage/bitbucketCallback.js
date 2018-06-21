import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './../actions';

class LandingPage extends Component {
    
    componentDidMount() {
        var url = new URL(window.location);
        var code = url.searchParams.get("code");
        this.props.bitbucket_token(code);
    }

    render() {
        return (
            <div className="LoginScreen">
                <div className="loading"></div>
            </div>
        );
    }
}

function mapStateToProps({ profile }) {
    return { profile }
}

export default connect(mapStateToProps, actions)(LandingPage);