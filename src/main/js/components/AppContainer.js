
import React from 'react';
import Login from './Login';
import Logout from './Logout';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUserAction, signOutAction } from '../reducers/user-reducer';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getUser();
    };

    render() {
        if(this.props.authenticated) {
            return (<Logout userName={this.props.userName} signOut={this.props.signOut}/>);
        } else {
            return (<Login />);
        }
    };
};

const mapStateToProps = (state) => {
    return {
        authenticated: state.authenticated,
        userName: state.userName
    }
}

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        getUser: getUserAction,
        signOut: signOutAction
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);