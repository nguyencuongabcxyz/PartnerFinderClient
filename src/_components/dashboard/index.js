import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../_actions/auth';
import { removeModalBootstrap } from '../../_helpers/uiHelper';
import PageLayout from '../../_components/layout/PageLayout';
import PartnerFinderList from '../../_components/dashboard/PartnerFinderList';
import QuestionList from '../../_components/dashboard/QuestionList';
import FeedbackList from '../../_components/dashboard/FeedbackList';
import './style.css'

class DashBoard extends React.Component {
  render() {
    removeModalBootstrap();
    return (
      <PageLayout>
        <div className="row" id="dashboard-page">
          <div id="db-left-section" className="col-lg-6">
            <PartnerFinderList />
          </div>
          <div id="db-right-section" className="col-lg-6">
            <div id="db-question-list-wrapper">
              <QuestionList paginationSize={6} />
            </div>
            <div id="db-feedback-list-wrapper">
              <FeedbackList paginationSize={6}/>
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }
}

export default connect(null, { logoutUser })(DashBoard);