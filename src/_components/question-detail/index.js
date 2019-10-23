import React from "react";
import { connect } from "react-redux";

import "./style.css";
import PageLayout from "../layout/PageLayout";

import { fetchOneQuestionPost } from "../../_actions/post/question-post";

class QuestionDetail extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(this.props);
    this.props.fetchOneQuestionPost(id);
  }
  render() {
    console.log(this.props.questionPost);
    return (
      <PageLayout>
        <div>QuestionDetail</div>
      </PageLayout>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { questionPosts } = state.questionPost;
  const { id } = ownProps.match.params;
  return {
    questionPost: questionPosts[id]
  };
};

export default connect(
  mapStateToProps,
  { fetchOneQuestionPost }
)(QuestionDetail);
