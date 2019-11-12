import React from 'react'
import './style.css';
import FeedbackItem from '../FeedbackItem';
import { connect } from 'react-redux';
import { fetchManyFeedbackPosts } from '../../../_actions/dashboard-post/db-feedback-post';
import Pagination from '../../shared/pagination';
import Spinner from '../../Spinner';

class FeedbackList extends React.Component {


    componentDidMount() {
        const { paginationSize } = this.props;
        this.props.fetchManyFeedbackPosts(0, paginationSize);
    }

    renderFeedbackPosts = () => {
        return this.props.feedbackPosts.map(item => {
            return (
                <FeedbackItem key={item.id} feedbackPost={item}/>
            );
        });
    }

    fetchFeedbackPostsPagination = (index) => {
        const { paginationSize } = this.props;
        this.props.fetchManyFeedbackPosts(index, paginationSize);
    }

    render() {
        const { paginationSize } = this.props;
        return (
          <div id="feedback-list">
            <h1 className="dashboard-title">Top feedback</h1>
            <div className="ui search">
              <div className="ui icon input">
                <input
                  className="prompt"
                  type="text"
                  placeholder="Search by name..."
                />
                <i className="search icon"></i>
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

const mapStateToProps = (state) => {
    return {
        feedbackPosts : state.dbFeedbackPost.feedbackPosts,
        count : state.dbFeedbackPost.count
    }
}

export default connect(mapStateToProps, {fetchManyFeedbackPosts})(FeedbackList);