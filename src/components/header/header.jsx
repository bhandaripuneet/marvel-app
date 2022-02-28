import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';

import config from '../../config.jsx';
import './header.css';

class Header extends React.Component {

    goToHome = () => {
        if (this.props.activeUser.type === 'USER') {
            this.props.history.push("/user");
        } else {
            this.props.history.push("/admin");
        }
    }

    render() {
        return (
            <div >
                <Paper zDepth={2}>
                    <AppBar
                        title={<span className="appName">{config.appName}</span>}
                        onTitleClick={this.goToHome}
                        iconElementLeft={<div />}
                        iconElementRight={<span>{this.props.activeUser}</span>}
                        style={{ margin: '0% 0% 1% 0%' }}
                    />
                </Paper>
            </div >
        );
    }

}

const mapStateToProps = (state) => {
    return {
        activeUser: state.activeUser
    };
};

export default withRouter(connect(
    mapStateToProps
)(Header));