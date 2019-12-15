import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import $ from "jquery";
import { HubConnection } from "@aspnet/signalr";
import * as signalR from "@aspnet/signalr";

class ChatScreen extends React.Component {
  state = {
    hubConnection: new signalR.HubConnectionBuilder()
      .withUrl("https://localhost:44348/chat", {
        accessTokenFactory: () => {
          const token = localStorage.getItem("token");
          return token;
        }
      })
      .build(),
    messages: null
  };
  count = 0;
  componentDidMount() {
    const { messages } = this.props.conversation;
    const arrayMessages = [];
    messages.forEach(el => {
      const message = {senderId: el.senderId, content: el.content};
      arrayMessages.push(message);
    });
    this.setState({
      messages: arrayMessages,
    });
    $("#myMessageContainer")
      .stop()
      .animate({
        scrollTop: $("#myMessageContainer")[0].scrollHeight
      });
    this.connect();
    this.autoReconnect();
    this.listenMessage();
  }

  autoReconnect = async () => {
    const { hubConnection } = this.state;
    hubConnection.onclose(() => {
      console.log("--dis--");
      const token = localStorage.getItem("token");
      if (token) this.connect();
    });
  };

  connect = async () => {
    const { hubConnection } = this.state;
    hubConnection
      .start()
      .then(() => {
        this.count = 0;
        console.log("Connection Started!");
      })
      .catch(err => {
        this.count++;
        if (this.count < 10) {
          setTimeout(() => {
            this.connect();
          }, 5000);
        }
      });
  };

  listenMessage = () => {
    const { hubConnection } = this.state;
    hubConnection.on("sendChatMessage", (message, senderId) => {
      const newMessage = {senderId: senderId, content: message};
      this.setState({
        messages: [...this.state.messages, newMessage],
      });
    });
  };

  sendMessage = (receiverId, message) => {
    this.chatInput.value = '';
    const { hubConnection } = this.state;
    hubConnection
      .invoke("sendChatMessage", receiverId, message)
      .catch(err => console.error(err));
  };

  renderMessages = () => {
    console.log("RENDER MESSAGE");
    const { creatorId, creatorAvatar } = this.props.conversation;
    const { messages } = this.state;
    if(!messages) return;
    return messages.map(el => {
      if (el.senderId !== creatorId) {
        return (
          <div className="user-message">
            {el.content}
          </div>
        );
      } else {
        return (
          <div className="partner-message">
            <img className="ui avatar image" src={creatorAvatar} alt="avatar" />
            {el.content}
          </div>
        );
      }
    });
  };

  render() {
    console.log("RENDER");
    const { creatorId, creatorName, creatorAvatar } = this.props.conversation;
    return (
      <div>
        <div className="chat-header">
          <div className="active-dot"></div>
          <img className="ui avatar image" src={creatorAvatar} alt="avatar" />
          <div className="content">
            <Link to={`/user-info/${creatorId}`} className="header">
              {creatorName}
            </Link>
          </div>
        </div>
        <div className="chat-body">
          <div className="chat-message" id="myMessageContainer">
            {this.renderMessages()}
          </div>
          <div className="ui icon input chat-input">
            <input
              ref={el => this.chatInput = el}
              type="text"
              placeholder="Input your message..."
              onKeyPress={event => {
                if (event.key === "Enter") {
                  this.sendMessage(creatorId, event.target.value);
                }
              }}
            />
            <i className="telegram icon"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatScreen;
