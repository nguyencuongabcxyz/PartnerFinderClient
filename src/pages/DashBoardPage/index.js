import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../_actions/authActions';
import { removeModalBootstrap } from '../../_helpers/uiHelper';
import PageLayout from '../../_components/PageLayout';
import PartnerFinderList from '../../_components/dashboard/PartnerFinderList';
import QuestionList from '../../_components/dashboard/QuestionList';
import FeedbackList from '../../_components/dashboard/FeedbackList';
import './style.css'

class DashBoardPage extends React.Component {

    render() {
        removeModalBootstrap();
        return (
            <PageLayout >
                <div className="row" id="dashboard-page">
                <div className="col-lg-4">
                   <PartnerFinderList />
                </div>
                <div className="col-lg-4">
                   <QuestionList />
                </div>
                <div className="col-lg-4">
                   <FeedbackList />
                </div>
                </div>
            </PageLayout>
        );
    }
}

export default connect(null, { logoutUser })(DashBoardPage);