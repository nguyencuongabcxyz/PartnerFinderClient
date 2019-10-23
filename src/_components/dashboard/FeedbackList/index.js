import React from 'react'
import './style.css';
import FeedbackItem from '../FeedbackItem';
import { connect } from 'react-redux';
import { fetchManyFeedbackPosts } from '../../../_actions/dashboard-post/db-feedback-post';
import Pagination from '../../shared/pagination';
import Spinner from '../../Spinner';

class FeedbackList extends React.Component {

    sizePage = 6;

    componentDidMount() {
        this.props.fetchManyFeedbackPosts(0, this.sizePage);
    }

    renderFeedbackPosts = () => {
        return this.props.feedbackPosts.map(item => {
            return (
                <FeedbackItem key={item.id} feedbackPost={item}/>
            );
        });
    }

    fetchFeedbackPostsPagination = (index) => {
        this.props.fetchManyFeedbackPosts(index, this.sizePage);
    }

    render() {
        return (
            <div id="feedback-list">
                <h1 className="dashboard-title">Top feedback</h1>
                <Spinner condition={this.props.feedbackPosts.length === 0}/>
                <div className="right-section-content">
                    {this.renderFeedbackPosts()}
                </div>
                <Pagination callBack={this.fetchFeedbackPostsPagination}  itemCount={this.props.count} sizePage={this.sizePage}/>
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