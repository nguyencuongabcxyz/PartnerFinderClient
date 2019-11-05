import React from 'react'
import './style.css';
import QuestionItem from '../QuestionItem';
import { connect } from 'react-redux';
import { fetchManyQuestionPosts } from '../../../_actions/dashboard-post/db-question-post';
import Pagination from '../../shared/pagination';
import Spinner from '../../Spinner';

class QuestionList extends React.Component {

    componentDidMount() {
        const { paginationSize } = this.props;
        this.props.fetchManyQuestionPosts(0, paginationSize);
    }

    renderQuestionPosts = () => {
        return this.props.questionPosts.map(item => {
            return (
                <QuestionItem key={item.id} questionPost={item}/>
            );
        });
    }

    fetchQuestionPostsPagination = (index) => {
        this.props.fetchManyQuestionPosts(index, this.sizePage)
    }

    render() {
        const { paginationSize } = this.props;
        return (
            <div id="question-list">
                <h1 className="dashboard-title">Top questions</h1>
                <Spinner condition={this.props.questionPosts.length === 0}/>
                <div className="right-section-content">
                    {this.renderQuestionPosts()}
                </div>
                <Pagination callBack={this.fetchQuestionPostsPagination}  itemCount={this.props.count} sizePage={paginationSize}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      questionPosts : state.dbQuestionPost.questionPosts,
      count : state.dbQuestionPost.count
    }
}

export default connect(mapStateToProps, {fetchManyQuestionPosts})(QuestionList);