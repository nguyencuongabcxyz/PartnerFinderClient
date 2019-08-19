import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../_actions/authActions';
import { removeModalBootstrap } from '../../_helpers/uiHelper';

class DashBoardPage extends React.Component {

    logout = () => {
        this.props.logoutUser();
    }

    render() {
        removeModalBootstrap();
        return (
            <div>
                DashBoardPage
                <button onClick={this.logout} className="btn btn-lg btn-danger">Logout</button>
            </div>
        );
    }
}

export default connect(null, { logoutUser })(DashBoardPage);