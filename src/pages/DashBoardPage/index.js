import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../_actions/authActions'

class DashBoardPage extends React.Component {

    logout = () => {
        this.props.logoutUser();
    }

    render() {

        var token = process.env.REACT_APP_TOKEN;
        return (
            <div>
                DashBoardPage
                <h1>{token}</h1>
                <button onClick={this.logout} className="btn btn-lg btn-danger">Logout</button>
            </div>
        );
    }
}

export default connect(null, { logoutUser })(DashBoardPage);