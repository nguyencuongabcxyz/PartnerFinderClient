import React from 'react';
import { connect } from 'react-redux';
import { fetchManyNotifications } from '../../../_actions/notification';
import {Link} from 'react-router-dom';
import './style.css';
import NotificationItemPopup from '../NotificationItemPopup';

class NotificationListPopup extends React.Component {
    sizePage = 8;

    componentDidMount() {
      const { fetchManyNotifications } = this.props;
      fetchManyNotifications(0, this.sizePage);
    }
  
      renderNotifications = () => {
        const { notifications } = this.props;
        return notifications.map(item => {
          return <NotificationItemPopup key={item.id} item={item} />
        });
      }
  
      render(){
          return (
              <div className="pr-popup-container">
                  <div className="pr-popup-header">
                      <h3>Notifications</h3>
                  </div>
                  <div className="pr-popup-body">
                  <p className="pr-popup-new">New</p>
                     {this.renderNotifications()}
                  </div>
                  <div className="pr-popup-footer">
                      <Link to={"notification"}><span>See all</span></Link>
                  </div>
              </div>
          );
      };
  }
  
  const mapStateToProps = state => {
    return {
      notifications: state.notification.notifications,
    };
  };
  

export default connect(mapStateToProps, {fetchManyNotifications})(NotificationListPopup);