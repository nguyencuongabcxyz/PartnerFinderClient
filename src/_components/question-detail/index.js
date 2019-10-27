import React from "react";
import { connect } from "react-redux";

import "./style.css";
import PageLayout from "../layout/PageLayout";
import CustomEditor from "../shared/CustomEditor";
import {
  getPostedTimeAgo
} from '../../_helpers/dateTimeHelper'

import { fetchOneQuestionPost } from "../../_actions/post/question-post";
import { fetchManyComments } from '../../_actions/comment';
import Spinner from "../Spinner";

class QuestionDetail extends React.Component {

  editorConfig = {
    extraPlugins : 'autogrow',
    autoGrow_maxHeight : 600,
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchOneQuestionPost(id);
    this.props.fetchManyComments(id);
  }

  renderSubComments = (subComments) => {
    return subComments.map(comment => {
      const { avatar, name, createdDate, content, id, parentId } = comment;
      return (
        <div className="comment" key={id}>
        <a className="avatar">
          <img alt="avatar" className="qd-c-avatar" src={avatar} />
        </a>
        <div className="content">
          <a className="author">{name}</a>
          <div className="metadata">
            <span className="date">{getPostedTimeAgo(createdDate)}</span>
          </div>
          <div className="text">
            <p>
              {content}
            </p>
          </div>
          <div className="actions">
          <a className="reply">Like</a>
          <a className="reply" data-toggle="collapse" href={`#comment-box-${parentId}`} role="button" aria-expanded="false" aria-controls={`comment-box-${parentId}`}>Reply</a>
          </div>
        </div>
      </div>
      );
    });
  }

  renderComments = () => {
    const { comments } = this.props;
    return comments.map(comment => {
      const { avatar, name, createdDate, content, subComments, id } = comment;
      return (
        <div className="comment" key={id}>
          <a className="avatar">
            <img alt="avatar" className="qd-c-avatar" src={avatar} />
          </a>
          <div className="content">
            <a className="author">{name}</a>
            <div className="metadata">
              <span className="date">{getPostedTimeAgo(createdDate)}</span>
            </div>
            <div className="text">
              <p>{content}</p>
            </div>
            <div className="actions">
              <a className="reply">Like</a>
              <a className="reply" data-toggle="collapse" href={`#comment-box-${id}`} role="button" aria-expanded="false" aria-controls={`comment-box-${id}`}>Reply</a>
            </div>
          </div>
          <div className="comments">{this.renderSubComments(subComments)}</div>
          <div className="collapse" id={`comment-box-${id}`}>
            <div id="qd-sub-reply-comment">
              <CustomEditor
                config={this.editorConfig}
                data=""
                setPreviewContent={() => {}}
              />
              <button className="brown ui button qd-btn-reply">
                <i className="ui icon edit"></i>Reply
              </button>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    const { questionPost } = this.props;
    const { title, content, avatar, name } = questionPost || {};
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
                  <div className="detail">2h ago</div>
                </div>
                <div className="ui label">
                  Comments
                  <div className="detail">6</div>
                </div>
                <div className="ui label">
                  Vote
                  <div className="detail">6</div>
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
                  <a className="ui label qd-avatar-label">
                    <img
                      alt="avatar"
                      className="ui right spaced avatar image"
                      src={avatar}
                    />
                    {name}
                  </a>
                  <div id="qd-vote-button">
                    <button className="ui icon button red">
                      <i className="thumbs up icon"></i>
                    </button>
                    <button className="ui icon button teal">
                      <i className="thumbs down icon"></i>
                    </button>
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
                  config={this.editorConfig}
                  data=""
                  setPreviewContent={() => {}}
                   />
                   <button className="brown ui button qd-btn-reply"><i className="ui icon edit"></i>Add comment</button>
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
    comments : Object.values(comments)
  };
};

export default connect(
  mapStateToProps,
  { 
    fetchOneQuestionPost,
    fetchManyComments
  }
)(QuestionDetail);
