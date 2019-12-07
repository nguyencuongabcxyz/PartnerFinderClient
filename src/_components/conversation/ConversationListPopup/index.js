import React from "react";
import { connect } from "react-redux";
import { fetchManyConversations } from "../../../_actions/conversation";
import { Link } from "react-router-dom";
import ConversationItemPopup from "../ConversationItemPopup";

class ConversationListPopup extends React.Component {
  componentDidMount() {
    const { fetchManyConversations } = this.props;
    fetchManyConversations();
  }

  renderConversations = () => {
    const { conversations } = this.props;
    return conversations.map(item => {
      return <ConversationItemPopup key={item.id} item={item} />;
    });
  };

  render() {
    console.log(this.props.conversations);
    return (
      <div className="pr-popup-container">
        <div className="pr-popup-header">
          <h3>Conversations</h3>
        </div>
        <div className="pr-popup-body">
          <p className="pr-popup-new">New</p>
          {this.renderConversations()}
        </div>
        <div className="pr-popup-footer">
          <Link to={"conversation"}>
            <span>See all</span>
          </Link>
        </div>
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
  ConversationListPopup
);
