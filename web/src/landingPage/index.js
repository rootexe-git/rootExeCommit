import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './../actions';

class LandingPage extends Component {
    
    componentDidMount() {
        this.props.profile_fetch();
    }

    onLoginBitbucket() {
        window.location.href = 'https://bitbucket.org/site/oauth2/authorize?client_id='+window.bitbucketApiKey+'&response_type=code';
    }

    render() {
        return (
            <div className="LoginScreen">
                <div className="loginBtn" onClick={this.onLoginBitbucket.bind(this)}>
                    <i className="fab fa-bitbucket"></i> <span>Login With Bitbucket</span>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ profile }) {
    return { profile }
}

export default connect(mapStateToProps, actions)(LandingPage);