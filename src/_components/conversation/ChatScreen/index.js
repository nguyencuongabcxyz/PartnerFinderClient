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
    const el = document.getElementById("myMessageContainer");
    if (el) {
      setTimeout(() => {
        $("#myMessageContainer").animate(
          {
            scrollTop:
              $("#myMessageContainer")[0].scrollHeight -
              $("#myMessageContainer")[0].clientHeight +
              10000000
          },
          1000
        );
      }, 300);
    }
    const { messages } = this.props.conversation;
    const arrayMessages = [];
    messages.forEach(el => {
      const message = { senderId: el.senderId, content: el.content };
      arrayMessages.push(message);
    });
    this.setState({
      messages: arrayMessages
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
      const {reRender} = this.props;
      reRender();
      const newMessage = { senderId: senderId, content: message };
      const el = document.getElementById("myMessageContainer");
      if (el) {
        $("#myMessageContainer").animate(
          {
            scrollTop:
              $("#myMessageContainer")[0].scrollHeight -
              $("#myMessageContainer")[0].clientHeight +
              1000000
          },
          1000
        );
      }
      this.setState({
        messages: [newMessage, ...this.state.messages]
      });
    });
  };

  sendMessage = (receiverId, message) => {
    this.chatInput.value = "";
    const { hubConnection } = this.state;
    hubConnection
      .invoke("sendChatMessage", receiverId, message)
      .catch(err => console.error(err));
  };

  renderMessages = () => {
    const { creatorId, creatorAvatar } = this.props.conversation;
    const { messages } = this.state;
    if (!messages) return;
    return messages.map(el => {
      if (el.senderId !== creatorId) {
        return <div className="user-message">{el.content}</div>;
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
          <div className="table-wrapper" id="myMessageContainer">
            <div className="chat-message">
              <div className="chat-cell">
                <div className="message-wrapper">{this.renderMessages()}</div>
              </div>
            </div>
          </div>
          <div className="ui icon input chat-input">
            <input
              ref={el => (this.chatInput = el)}
              type="text"
              placeholder="Input your message..."
              onKeyPress={event => {
                if (event.key === "Enter") {
                  if (event.target.value == "") return false;
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
