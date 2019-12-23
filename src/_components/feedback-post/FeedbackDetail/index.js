import React from "react";
import { connect } from "react-redux";
import $ from "jquery";
import { Link } from "react-router-dom";
import { Popup } from 'semantic-ui-react';

import "./style.css";
import PageLayout from "../../layout/PageLayout";
import FeedbackList from "../../dashboard/FeedbackList";
import CustomEditor from "../../shared/CustomEditor";
import { getPostedTimeAgo } from "../../../_helpers/dateTimeHelper";

import { fetchOneFeedbackPost, updateFeedbackPostUpVote } from "../../../_actions/post/feedback-post";
import {
  fetchManyComments,
  addSubComment,
  addParentComment,
  switchLikeReactionOfMainComment,
  switchLikeReactionOfSubComment,
} from "../../../_actions/comment";
import { PostService } from '../../../_services/post';
import { FEEDBACK_TYPE_TXT } from "../../../_constants/common";
import Spinner from "../../Spinner";

class FeedbackDetail extends React.Component {

  state = {
    isVoted: false,
  }

  editorConfig = {
    extraPlugins: "autogrow",
    autoGrow_maxHeight: 600
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchOneFeedbackPost(id);
    const isVoted = await PostService.checkIfUserVotedPost(id);
    this.setState({
      isVoted,
    });
    this.props.fetchManyComments(id);
  }

  resetSubCommentBox = id => {
    this[`_customSubEditor${id}`].setData("");
    $(`#comment-box-${id}`).collapse("hide");
  };

  resetMainCommentBox = id => {
    this[`_customParentEditor${id}`].setData("");
  };

  triggerAddSubCommentFunc = (postId, parentId) => {
    this[`_customSubEditor${parentId}`].addSubComment(postId, parentId);
    this.resetSubCommentBox(parentId);
  };

  addSubComment = (postId, parentId, content) => {
    this.props.addSubComment(postId, parentId, content);
  };

  triggerAddParentCommentFunc = postId => {
    this[`_customParentEditor${postId}`].addParentComment(postId);
    this.resetMainCommentBox(postId);
  };

  addParentComment = (postId, content) => {
    this.props.addParentComment(postId, content);
  };

  updateUpVote = (id) => {
    this.props.updateFeedbackPostUpVote(id);
    this.setState(preState => ({
      isVoted: !preState.isVoted,
    }));
  }

  switchSubLikeReaction = (id) => {
    this.props.switchLikeReactionOfSubComment(id);
  }

  switchMainLikeReaction = (id) => {
    this.props.switchLikeReactionOfMainComment(id);
  }

  renderSubComments = subComments => {
    return subComments.map(comment => {
      const {
        avatar,
        name,
        createdDate,
        content,
        id,
        parentId,
        userId,
        like,
        isLiked
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
              <Link className="reply" onClick={() => { this.switchSubLikeReaction(id) }}>{isLiked ? <i className="ui icon red thumbs up comment-like-icon"></i> : 'Like'}</Link>
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
              <span className="comment-like-nums"><i className="ui icon teal thumbs up outline"></i>{like}</span>
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
        userId,
        like,
        isLiked,
        postId,
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
              <Link className="reply" onClick={() => { this.switchMainLikeReaction(id) }}>{isLiked ? <i className="ui icon red thumbs up comment-like-icon"></i> : 'Like'}</Link>
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
              <span className="comment-like-nums"><i className="ui icon teal thumbs up outline"></i>{like}</span>
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
                  this.triggerAddSubCommentFunc(postId, id);
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

  renderVideo = (video) => {
      if (!video) return null;
      return (
          <div id="fd-spoken-video-wrapper">
                <video id="fd-spoken-video" src={video} controls>
                Your browser does not support the video tag.
              </video>
          </div>
      ); 
  }

  render() {
    const { isVoted } = this.state;
    const upVoteButtonClass = isVoted ? 'ui icon button red' : 'ui icon basic button red'
    const { feedbackPost } = this.props;
    const {
      title,
      content,
      avatar,
      name,
      id,
      userId,
      answerNumber,
      updatedDate,
      type,
      script,
      video,
      upVote
    } = feedbackPost || {};
    return (
      <PageLayout>
        <div className="question-detail">
          <div id="qd-left-section">
            <div id="qd-question-detail">
              <Spinner condition={!this.props.feedbackPost} />
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
                <div className="ui orange label">{FEEDBACK_TYPE_TXT[type]}</div>
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: content }}
                id="qd-question-content"
              ></div>
              <h3 className="ui dividing header">Script</h3>
              <div
                id="qd-script"
                className="ui floating message teal"
                dangerouslySetInnerHTML={{ __html: script }}
              ></div>
              {this.renderVideo(video)}
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
                      content={"Upvote this post"}
                      trigger={
                        <button
                          className={upVoteButtonClass}
                          onClick={() => {
                            this.updateUpVote(id);
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
                          <i className="exclamation icon"></i>
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
              <FeedbackList paginationSize={10}/>
          </div>
        </div>
      </PageLayout>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { feedbackPosts } = state.feedbackPost;
  const { comments } = state.comment;
  const { id } = ownProps.match.params;
  return {
    feedbackPost: feedbackPosts[id],
    comments: Object.values(comments)
  };
};

export default connect(
  mapStateToProps,
  {
    fetchOneFeedbackPost,
    fetchManyComments,
    addSubComment,
    addParentComment,
    updateFeedbackPostUpVote,
    switchLikeReactionOfMainComment,
    switchLikeReactionOfSubComment,
  }
)(FeedbackDetail);
