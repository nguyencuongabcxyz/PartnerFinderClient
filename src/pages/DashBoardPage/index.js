import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../_actions/authActions';
import { removeModalBootstrap } from '../../_helpers/uiHelper';
import PageLayout from '../../_components/PageLayout';
import PartnerFinderList from '../../_components/dashboard/PartnerFinderList';

class DashBoardPage extends React.Component {

    render() {
        removeModalBootstrap();
        return (
            <PageLayout >
                <PartnerFinderList />
            </PageLayout>
        );
    }
}

export default connect(null, { logoutUser })(DashBoardPage);