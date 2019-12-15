import React from "react";
import { connect } from "react-redux";
import { fetchManyConversations } from "../../../_actions/conversation";
import { Link } from "react-router-dom";
import ConversationItem from "../ConversationItem";
import "./style.css";

class ConversationList extends React.Component {
  componentDidMount() {
    const { fetchManyConversations } = this.props;
    fetchManyConversations();
  }

  renderConversations = () => {
    const { conversations } = this.props;
    return conversations.map(item => {
      return <ConversationItem key={item.id} item={item} />;
    });
  };

  render() {
    return (
      <div>
        <div className="cl-header">
          <h3>Conversations</h3>
        </div>
        <div className="cl-body">{this.renderConversations()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    conversations: state.conversation.conversations
  };
};

export default connect(mapStateToProps, { fetchManyConversations })(
  ConversationList
);
