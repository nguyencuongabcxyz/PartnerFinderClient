import React from 'react'
import './style.css';
import QuestionItem from '../QuestionItem';
import { connect } from 'react-redux';
import { fetchManyQuestionPosts } from '../../../_actions/questionPostActions';
import Pagination from '../../shared/pagination';
import Spinner from '../../Spinner';

class QuestionList extends React.Component {

    sizePage = 6;

    componentDidMount() {
        console.log("render did mount!");
        this.props.fetchManyQuestionPosts(0, this.sizePage);
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
        return (
            <div id="question-list">
                <h1 className="dashboard-title">Top questions</h1>
                <Spinner condition={this.props.questionPosts.length === 0}/>
                <div className="right-section-content">
                    {this.renderQuestionPosts()}
                </div>
                <Pagination callBack={this.fetchQuestionPostsPagination}  itemCount={this.props.count} sizePage={this.sizePage}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      questionPosts : state.questionPost.questionPosts,
      count : state.questionPost.count
    }
}

export default connect(mapStateToProps, {fetchManyQuestionPosts})(QuestionList);