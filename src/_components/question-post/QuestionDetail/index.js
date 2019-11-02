import React from "react";
import { connect } from "react-redux";
import $ from "jquery";
import { Link } from "react-router-dom";
import { Popup } from "semantic-ui-react";

import "./style.css";
import PageLayout from "../../layout/PageLayout";
import CustomEditor from "../../shared/CustomEditor";
import { getPostedTimeAgo } from "../../../_helpers/dateTimeHelper";
import { PostService } from "../../../_services/post";
import {
  fetchOneQuestionPost,
  updateQuestionPostUpVote
} from "../../../_actions/post/question-post";
import {
  fetchManyComments,
  addSubComment,
  addParentComment
} from "../../../_actions/comment";
import Spinner from "../../Spinner";

class QuestionDetail extends React.Component {
  editorConfig = {
    extraPlugins: "autogrow",
    autoGrow_maxHeight: 600
  };

  state = {
    isVoted: false
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchOneQuestionPost(id);
    const checkVotedResult = await PostService.checkIfUserVotedPost(id);
    if (checkVotedResult) {
    this.setState({
      isVoted: checkVotedResult.isVoted
    });
    }
    this.props.fetchManyComments(id);
  }

  resetSubCommentBox = id => {
    this[`_customSubEditor${id}`].setData("");
    $(`#comment-box-${id}`).collapse("hide");
  };

  resetMainCommentBox = id => {
    this[`_customParentEditor${id}`].setData("");
  };

  triggerAddSubCommentFunc = parentId => {
    this[`_customSubEditor${parentId}`].addSubComment(parentId);
    this.resetSubCommentBox(parentId);
  };

  addSubComment = (parentId, content) => {
    this.props.addSubComment(parentId, content);
  };

  triggerAddParentCommentFunc = postId => {
    this[`_customParentEditor${postId}`].addParentComment(postId);
    this.resetMainCommentBox(postId);
  };

  addParentComment = (postId, content) => {
    this.props.addParentComment(postId, content);
  };

  updateUpvote = async id => {
    this.props.updateQuestionPostUpVote(id);
    this.setState(preState => ({
      isVoted: !preState.isVoted,
    }));
  };

  renderSubComments = subComments => {
    return subComments.map(comment => {
      const {
        avatar,
        name,
        createdDate,
        content,
        id,
        parentId,
        userId
      } = comment;
      return (
        <div className="comment" key={id}>
          <Link to={`/user-info/${userId}`} className="avatar">
            <img alt="avatar" className="qd-c-sub-avatar" src={avatar} />
          </Link>
          <div className="content">
            <Link to={`/user-info/${userId}`} className="author">
              {name}
            </Link>
            <div className="metadata">
              <span className="date">{getPostedTimeAgo(createdDate)}</span>
            </div>
            <div
              className="text"
              id={`sub-comment-${id}`}
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
            <div className="actions">
              <a className="reply">Like</a>
              <a
                className="reply"
                data-toggle="collapse"
                href={`#comment-box-${parentId}`}
                role="button"
                aria-expanded="false"
                aria-controls={`comment-box-${parentId}`}
              >
                Reply
              </a>
            </div>
          </div>
        </div>
      );
    });
  };

  renderComments = () => {
    const { comments } = this.props;
    return comments.map(comment => {
      const {
        avatar,
        name,
        createdDate,
        content,
        subComments,
        id,
        userId
      } = comment;
      return (
        <div className="comment" key={id}>
          <Link to={`/user-info/${userId}`} className="avatar">
            <img alt="avatar" className="qd-c-avatar" src={avatar} />
          </Link>
          <div className="content">
            <Link to={`/user-info/${userId}`} className="author">
              {name}
            </Link>
            <div className="metadata">
              <span className="date">{getPostedTimeAgo(createdDate)}</span>
            </div>
            <div
              className="text"
              id={`main-comment-${id}`}
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
            <div className="actions">
              <a className="reply">Like</a>
              <a
                className="reply"
                data-toggle="collapse"
                href={`#comment-box-${id}`}
                role="button"
                aria-expanded="false"
                aria-controls={`comment-box-${id}`}
              >
                Reply
              </a>
            </div>
          </div>
          <div className="comments qd-c-sub-comments">
            {this.renderSubComments(subComments)}
          </div>
          <div className="collapse" id={`comment-box-${id}`}>
            <div id="qd-sub-reply-comment">
              <CustomEditor
                ref={el => {
                  this[`_customSubEditor${id}`] = el;
                }}
                config={this.editorConfig}
                setPreviewContent={() => {}}
                submitData={this.addSubComment}
              />
              <button
                className="brown ui button qd-btn-reply"
                onClick={() => {
                  this.triggerAddSubCommentFunc(id);
                }}
              >
                <i className="ui icon edit"></i>Reply
              </button>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    const { isVoted } = this.state;
    const upvoteButtonClass = isVoted
      ? "ui icon button red"
      : "ui icon basic button red";
    const { questionPost } = this.props;
    const {
      title,
      content,
      avatar,
      name,
      id,
      userId,
      answerNumber,
      updatedDate,
      upVote
    } = questionPost || {};
    return (
      <PageLayout>
        <div className="question-detail">
          <div id="qd-left-section">
            <div id="qd-question-detail">
              <Spinner condition={!this.props.questionPost} />
              <h2>{title}</h2>
              <div id="qd-label-section">
                <div className="ui label">
                  Asked
                  <div className="detail">{getPostedTimeAgo(updatedDate)}</div>
                </div>
                <div className="ui label">
                  Comments
                  <div className="detail">{answerNumber}</div>
                </div>
                <div className="ui label">
                  Vote
                  <div className="detail">{upVote}</div>
                </div>
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: content }}
                id="qd-question-content"
              ></div>
              <div id="qd-question-bottom">
                <div id="qd-question-tag">
                  <a className="ui teal tag label">pronounciation</a>
                  <a className="ui teal tag label">present-simple</a>
                  <a className="ui teal tag label">daily</a>
                </div>
                <div id="qd-question-user">
                  <Link
                    to={`/user-info/${userId}`}
                    className="ui label qd-avatar-label"
                  >
                    <img
                      alt="avatar"
                      className="ui right spaced avatar image"
                      src={avatar}
                    />
                    {name}
                  </Link>
                  <div id="qd-vote-button">
                    <Popup
                      content={"Downvote this post"}
                      trigger={
                        <button
                          className={upvoteButtonClass}
                          onClick={() => {
                            this.updateUpvote(id);
                          }}
                        >
                          <i className="thumbs up icon"></i>
                        </button>
                      }
                    />
                    <Popup
                      content={"Downvote this post"}
                      trigger={
                        <button className="ui icon basic button teal">
                          <i className="thumbs down icon"></i>
                        </button>
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div id="qd-comment-section">
              <div className="ui comments">
                <h3 className="ui dividing header">Comments</h3>
                {this.renderComments()}
                <div id="qd-main-reply-comment">
                  <CustomEditor
                    ref={el => {
                      this[`_customParentEditor${id}`] = el;
                    }}
                    config={this.editorConfig}
                    data=""
                    setPreviewContent={() => {}}
                    submitData={this.addParentComment}
                  />
                  <button
                    className="brown ui button qd-btn-reply"
                    onClick={() => {
                      this.triggerAddParentCommentFunc(id);
                    }}
                  >
                    <i className="ui icon edit"></i>Add comment
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div id="qd-right-section">
            <div id="qd-related-questions"></div>
          </div>
        </div>
      </PageLayout>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { questionPosts } = state.questionPost;
  const { comments } = state.comment;
  const { id } = ownProps.match.params;
  return {
    questionPost: questionPosts[id],
    comments: Object.values(comments)
  };
};

export default connect(
  mapStateToProps,
  {
    fetchOneQuestionPost,
    fetchManyComments,
    addSubComment,
    addParentComment,
    updateQuestionPostUpVote
  }
)(QuestionDetail);
