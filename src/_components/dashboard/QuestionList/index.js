import React from "react";
import "./style.css";
import QuestionItem from "../QuestionItem";
import { connect } from "react-redux";
import { fetchManyQuestionPosts } from "../../../_actions/dashboard-post/db-question-post";
import Pagination from "../../shared/pagination";
import Spinner from "../../Spinner";
import SearchPost from "../../shared/SearchPost";
import { POST_TYPE_DETAIL_ROUTE } from "../../../_constants/common";

import { PostService } from "../../../_services/post";

class QuestionList extends React.Component {
  componentDidMount() {
    const { paginationSize } = this.props;
    this.props.fetchManyQuestionPosts(0, paginationSize);
  }

  renderQuestionPosts = () => {
    return this.props.questionPosts.map(item => {
      return <QuestionItem key={item.id} questionPost={item} />;
    });
  };

  fetchQuestionPostsPagination = index => {
    const { paginationSize } = this.props;
    this.props.fetchManyQuestionPosts(index, paginationSize);
  };

  render() {
    const { paginationSize } = this.props;
    return (
      <div id="question-list">
        <div className="dashboard-header-section">
          <div className="post-search-wrapper">
            <SearchPost
              searchFunction={PostService.searchForQuestionPost}
              route={POST_TYPE_DETAIL_ROUTE.QUESTION}
              hint="Search for posts"
            />
          </div>
        </div>
        <Spinner condition={this.props.questionPosts.length === 0} />
        <div className="right-section-content">
          {this.renderQuestionPosts()}
        </div>
        <Pagination
          callBack={this.fetchQuestionPostsPagination}
          itemCount={this.props.count}
          sizePage={paginationSize}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    questionPosts: state.dbQuestionPost.questionPosts,
    count: state.dbQuestionPost.count
  };
};

export default connect(mapStateToProps, { fetchManyQuestionPosts })(
  QuestionList
);
