import React from "react";
import "./style.css";
import ConversationList from "./ConversationList";
import ChatScreen from "./ChatScreen";
import PageLayout from "../layout/PageLayout";
import { ConversationService } from "../../_services/conversation";

class Conversation extends React.Component {
  state = {
    conversation: 0
  };
  async componentDidMount() {
    const { id } = this.props.match.params;
    if (id !== 0) {
      const conversation = await ConversationService.getOne(id);
      this.setState({
        conversation
      });
    }
  }

  setActiveConversation = async id => {
    if (id !== 0) {
      const conversation = await ConversationService.getOne(id);
      this.setState({
        conversation
      });
    }
  };

  render() {
    const { conversation } = this.state;
    return (
      <PageLayout>
        <div className="conversation">
          <div className="conversation-left">
            <ConversationList />
          </div>
          <div className="conversation-right">
           {conversation === 0 || <ChatScreen conversation={conversation} />}
          </div>
        </div>
      </PageLayout>
    );
  }
}
export default Conversation;
