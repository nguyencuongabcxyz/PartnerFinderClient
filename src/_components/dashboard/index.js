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
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item">
                <a
                  class="active nav-post-title"
                  id="pills-home-tab"
                  data-toggle="pill"
                  href="#pills-home"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Top Questions
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-post-title"
                  id="pills-profile-tab"
                  data-toggle="pill"
                  href="#pills-profile"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Top Feedbacks
                </a>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div id="db-question-list-wrapper">
                  <QuestionList paginationSize={12} />
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div id="db-feedback-list-wrapper">
                  <FeedbackList paginationSize={12} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }
}

export default connect(null, { logoutUser })(DashBoard);