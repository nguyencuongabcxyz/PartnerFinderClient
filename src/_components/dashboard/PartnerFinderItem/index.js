import React from "react";
import './style.css';
import { getPostedTimeAgo } from '../../../_helpers/dateTimeHelper';

class PartnerFinderItem extends React.Component {


  loadMore = () => {
    var userId = this.props.partnerFinder.userId;
    document.getElementById(`text-more${userId}`).style.display = "inline";
    document.getElementById(`btn-more${userId}`).style.display = 'none';
    document.getElementById(`btn-less${userId}`).style.display = 'inline';
  }

  loadLess = () => {
    var userId = this.props.partnerFinder.userId;
    document.getElementById(`text-more${userId}`).style.display = "none";
    document.getElementById(`btn-more${userId}`).style.display = 'inline';
    document.getElementById(`btn-less${userId}`).style.display = 'none';
  }

  convertLevel = () => {
    switch(this.props.partnerFinder.level){
      case 0 :
        return 'Beginner';
      case 1 :
        return 'Intermediate';
      case 2 :
        return 'Advanced';
      default:
        return 'Beginner';
    }
  }

  splitDescription = () => {
    var description = this.props.partnerFinder.description;
    var splitedDescription = {};
    splitedDescription.firstPart = description.substr(0, 60);
    splitedDescription.secondPart = description.substring(60, description.length - 1);
    return splitedDescription;
  }

  render() {
    var splitedDescription = this.splitDescription();
    var userId = this.props.partnerFinder.userId;
    return (
      <div className="partner-item">
        <div className="ui card user-block">
          <div className="image partner-image">
            <img src={this.props.partnerFinder.avatar} alt="avatar"/>
          </div>
          <div className="content">
            <a href="#" className="header">{this.props.partnerFinder.name}</a>
            <div className="meta">
              <p><strong>Age: </strong>{this.props.partnerFinder.age}</p>
              <p><strong>Location: </strong>{this.props.partnerFinder.location}</p>
              <p><strong>Level: </strong>{this.convertLevel()}</p>
            </div>
            <div className="description">
            <span>{splitedDescription.firstPart}</span><a style={{color: 'blue'}} id={`btn-more${userId}`} onClick={this.loadMore}>...show more</a>
            <span id={`text-more${userId}`} style={{display: 'none'}}>{splitedDescription.secondPart}</span><a style={{display: 'none', color: 'blue'}} id={`btn-less${userId}`} onClick={this.loadLess}>...show less</a>
            </div>
          </div>
          <div className="extra content">
            <button className="btn btn-info btn-partner">
                Request partner
            </button>
            <button className="btn btn-secondary btn-partner">
                Ignore
            </button>
            <div>{getPostedTimeAgo(this.props.partnerFinder.postedDate)}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default PartnerFinderItem;
