import React from "react";
import "./style.css";
import FeedbackItem from "../FeedbackItem";
import { connect } from "react-redux";
import { fetchManyFeedbackPosts } from "../../../_actions/dashboard-post/db-feedback-post";
import Pagination from "../../shared/pagination";
import Spinner from "../../Spinner";
import SearchDropdown from "../../shared/SearchDropdown";
import { POST_TYPE_DETAIL_ROUTE } from "../../../_constants/common";

import { PostService } from "../../../_services/post";

class FeedbackList extends React.Component {
  componentDidMount() {
    const { paginationSize } = this.props;
    this.props.fetchManyFeedbackPosts(0, paginationSize);
  }

  renderFeedbackPosts = () => {
    return this.props.feedbackPosts.map(item => {
      return <FeedbackItem key={item.id} feedbackPost={item} />;
    });
  };

  fetchFeedbackPostsPagination = index => {
    const { paginationSize } = this.props;
    this.props.fetchManyFeedbackPosts(index, paginationSize);
  };

  searchForFeedbackPosts = value => {};

  render() {
    const { paginationSize } = this.props;
    return (
      <div id="feedback-list">
        <div className="dashboard-header-section">
          <h1 className="dashboard-title">Top feedback</h1>
          <div className="post-search-wrapper">
            <SearchDropdown
              searchFunction={PostService.searchForFeedbackPost}
              route={POST_TYPE_DETAIL_ROUTE.FEEDBACK}
              hint="Search for posts"
            />
          </div>
        </div>
        <Spinner condition={this.props.feedbackPosts.length === 0} />
        <div className="right-section-content">
          {this.renderFeedbackPosts()}
        </div>
        <Pagination
          callBack={this.fetchFeedbackPostsPagination}
          itemCount={this.props.count}
          sizePage={paginationSize}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    feedbackPosts: state.dbFeedbackPost.feedbackPosts,
    count: state.dbFeedbackPost.count
  };
};

export default connect(mapStateToProps, { fetchManyFeedbackPosts })(
  FeedbackList
);
