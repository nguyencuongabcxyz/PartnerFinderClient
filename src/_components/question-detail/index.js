import React from "react";
import { connect } from "react-redux";

import "./style.css";
import PageLayout from "../layout/PageLayout";

import { fetchOneQuestionPost } from "../../_actions/post/question-post";
import Spinner from "../Spinner";

class QuestionDetail extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchOneQuestionPost(id);
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
                <div className="comment">
                  <a className="avatar">
                    <img src={avatar} />
                  </a>
                  <div className="content">
                    <a className="author">Matt</a>
                    <div className="metadata">
                      <span className="date">Today at 5:42PM</span>
                    </div>
                    <div className="text">How artistic!</div>
                    <div className="actions">
                    <a className="reply">Like</a>
                      <a className="reply">Reply</a>
                    </div>
                  </div>
                </div>
                <div className="comment">
                  <a className="avatar">
                    <img src={avatar} />
                  </a>
                  <div className="content">
                    <a className="author">Elliot Fu</a>
                    <div className="metadata">
                      <span className="date">Yesterday at 12:30AM</span>
                    </div>
                    <div className="text">
                      <p>
                        This has been very useful for my research. Thanks as
                        well!
                      </p>
                    </div>
                    <div className="actions">
                    <a className="reply">Like</a>
                      <a className="reply">Reply</a>
                    </div>
                  </div>
                  <div className="comments">
                    <div className="comment">
                      <a className="avatar">
                        <img src={avatar} />
                      </a>
                      <div className="content">
                        <a className="author">Jenny Hess</a>
                        <div className="metadata">
                          <span className="date">Just now</span>
                        </div>
                        <div className="text">
                          Elliot you are always so right :)
                        </div>
                        <div className="actions">
                        <a className="reply">Like</a>
                          <a className="reply">Reply</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comment">
                  <a className="avatar">
                    <img src={avatar} />
                  </a>
                  <div className="content">
                    <a className="author">Joe Henderson</a>
                    <div className="metadata">
                      <span className="date">5 days ago</span>
                    </div>
                    <div className="text">
                      Dude, this is awesome. Thanks so much
                    </div>
                    <div className="actions">
                    <a className="reply">Like</a>
                      <a className="reply">Reply</a>
                    </div>
                  </div>
                </div>
                <form className="ui reply form">
                  <div className="field">
                    <textarea></textarea>
                  </div>
                  <div className="ui blue labeled submit icon button">
                    <i className="icon edit"></i> Add Reply
                  </div>
                </form>
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
  const { id } = ownProps.match.params;
  return {
    questionPost: questionPosts[id]
  };
};

export default connect(
  mapStateToProps,
  { fetchOneQuestionPost }
)(QuestionDetail);
