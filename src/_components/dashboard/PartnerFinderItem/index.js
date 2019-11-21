import React from "react";
import { connect } from 'react-redux';
import './style.css';
import { getPostedTimeAgo } from '../../../_helpers/dateTimeHelper';
import { Link } from 'react-router-dom';
import RequestPopup from "../RequestPopup";

class PartnerFinderItem extends React.Component {
  loadMore = () => {
    var userId = this.props.partnerFinder.userId;
    document.getElementById(`text-more${userId}`).style.display = "inline";
    document.getElementById(`btn-more${userId}`).style.display = "none";
    document.getElementById(`btn-less${userId}`).style.display = "inline";
  };

  loadLess = () => {
    var userId = this.props.partnerFinder.userId;
    document.getElementById(`text-more${userId}`).style.display = "none";
    document.getElementById(`btn-more${userId}`).style.display = "inline";
    document.getElementById(`btn-less${userId}`).style.display = "none";
  };

  convertLevel = () => {
    switch (this.props.partnerFinder.level) {
      case 0:
        return "Beginner";
      case 1:
        return "Intermediate";
      case 2:
        return "Advanced";
      default:
        return "Beginner";
    }
  };

  renderButtonAction = () => {
    const { status, userId } = this.props.partnerFinder;
    switch (status) {
      case 0:
        return (
          <button className="ui brown button btn-partner" data-toggle="modal" data-target={`#exampleModal${userId}`}>
            Request partner
          </button>
        );
        break;
      case 1:
        return (
          <button disabled className="ui brown button btn-partner">
            Request has sent
          </button>
        );
        break;
      case 2:
        return (
          <span className="ui grey label">
            <i className="ui icon check white"></i>Partnership
          </span>
        );
        break;
      default:
        return null;
        break;
    }
  };

  splitDescription = () => {
    const { introduction } = this.props.partnerFinder;
    const splitedDescription = {};
    splitedDescription.firstPart = introduction.substr(0, 60);
    splitedDescription.secondPart = introduction.substring(
      60,
      introduction.length - 1
    );
    return splitedDescription;
  };

  renderIntroduction = () => {
    const { introduction } = this.props.partnerFinder;
    if (!introduction) return null;
    const splitedDescription = this.splitDescription();
    const { userId } = this.props.partnerFinder;
    return (
      <div className="description">
        <span>{splitedDescription.firstPart}</span>
        <a
          style={{ color: "blue" }}
          id={`btn-more${userId}`}
          onClick={this.loadMore}
        >
          ...show more
        </a>
        <span id={`text-more${userId}`} style={{ display: "none" }}>
          {splitedDescription.secondPart}
        </span>
        <a
          style={{ display: "none", color: "blue" }}
          id={`btn-less${userId}`}
          onClick={this.loadLess}
        >
          ...show less
        </a>
      </div>
    );
  };

  renderInputContentPopup = () => {
    const { userId } = this.props.partnerFinder;
    console.log(userId);
    return (
      <div
        className="modal fade"
        id={`exampleModal${userId}`}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <RequestPopup userId={userId}/>
      </div>
    );
  };

  render() {
    const { userId } = this.props.partnerFinder;
    return (
      <div className="partner-item">
        <div className="ui card user-block">
          <div className="image partner-image">
            <img src={this.props.partnerFinder.avatar} alt="avatar" />
          </div>
          <div className="content">
            <Link to={`/user-info/${userId}`} className="header">
              {this.props.partnerFinder.name}
            </Link>
            <div className="meta">
              <p>
                <strong>Age: </strong>
                {this.props.partnerFinder.age}
              </p>
              <p>
                <strong>Location: </strong>
                {this.props.partnerFinder.location}
              </p>
              <p>
                <strong>Level: </strong>
                {this.convertLevel()}
              </p>
            </div>
            {this.renderIntroduction()}
          </div>
          <div className="extra content">
            {this.renderButtonAction()}
            <div>{getPostedTimeAgo(this.props.partnerFinder.updatedDate)}</div>
          </div>
        </div>
        {this.renderInputContentPopup()}
      </div>
    );
  }
}

export default PartnerFinderItem;
