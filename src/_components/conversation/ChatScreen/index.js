import React from "react";
import "./style.css";
import faker from "faker";

class ChatScreen extends React.Component {
  componentDidMount() {}
  render() {
    console.log(this.props.conversation);
    const { ownerId, messages } = this.props.conversation;
    return (
      <div>
        <div className="chat-header">
          <img
            className="ui avatar image"
            src={faker.image.avatar()}
            alt="avatar"
          />
          <div className="content">
            <a href className="header">
              Daniel Louise
            </a>
          </div>
        </div>
        <div className="chat-body">
          <div className="chat-message"></div>
          <div className="ui icon input chat-input">
            <input type="text" placeholder="Input your message..." />
            <i className="telegram icon"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatScreen;
