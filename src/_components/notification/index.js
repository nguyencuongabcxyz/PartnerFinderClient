import React from "react";
import { connect } from "react-redux";
import PageLayout from "../layout/PageLayout";
import { fetchManyNotifications } from "../../_actions/notification";
import NotificationItem from "./NotificationItem";

class Notification extends React.Component {
  sizePage = 8;

  componentDidMount() {
    const { fetchManyNotifications } = this.props;
    fetchManyNotifications(0, this.sizePage);
  }

  renderNotificationList = () => {
    const { notifications } = this.props;
    return notifications.map(item => {
      return <NotificationItem key={item.id} notification={item} />;
    });
  };

  render() {
    return (
      <PageLayout>
        <div className="pr-main-container">
          <h1>Your Notifications</h1>
          <div className="ui middle aligned divided list">
            {this.renderNotificationList()}
          </div>
        </div>
      </PageLayout>
    );
  }
}

const mapStateToProps = state => {
  return {
    notifications: state.notification.notifications
  };
};

export default connect(mapStateToProps, { fetchManyNotifications })(
  Notification
);
