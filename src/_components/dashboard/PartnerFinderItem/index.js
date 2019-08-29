import React from "react";
import './style.css';

class PartnerFinderItem extends React.Component {


  loadMore = () => {
      document.getElementById('text-more').style.display = "inline";
      document.getElementById('btn-more').style.display = 'none';
      document.getElementById('btn-less').style.display = 'inline';
  }

  loadLess = () => {
    document.getElementById('text-more').style.display = "none";
    document.getElementById('btn-more').style.display = 'inline';
    document.getElementById('btn-less').style.display = 'none';
  }

  render() {
    return (
      <div className="partner-item">
        <div className="ui card user-block">
          <div className="image partner-image">
            <img src="http://localhost:5000/images/myavatar.jpg" />
          </div>
          <div className="content">
            <a className="header">Cuong nguyen</a>
            <div className="meta">
              <p><strong>Age:</strong> 19</p>
              <p><strong>Location:</strong> Da Nang</p>
              <p><strong>Level:</strong> Beginner</p>
            </div>
            <div className="description">
            <span>It is a long established fact that a reader will be distracted by.....</span><a style={{color: 'blue'}} id="btn-more" onClick={this.loadMore}>show more</a>
            <span id="text-more" style={{display: 'none'}}>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', </span><a style={{display: 'none', color: 'blue'}} id="btn-less" onClick={this.loadLess}>show less</a>
            </div>
          </div>
          <div className="extra content">
            <a className="btn btn-info btn-partner">
                Request partner
            </a>
            <a className="btn btn-secondary btn-partner">
                Ignore
            </a>
            <div>1h ago</div>
          </div>
        </div>

        <div className="ui card">
          <div className="image partner-image">
            <img src="http://localhost:5000/images/linh.jpg" />
          </div>
          <div className="content">
            <a className="header">Linh Nguyen</a>
            <div className="meta">
              <p><strong>Age:</strong> 19</p>
              <p><strong>Location:</strong> Da Nang</p>
              <p><strong>Level:</strong> Beginner</p>
            </div>
            <div className="description">
            <span>It is a long established fact that a reader will be distracted by.....</span><a style={{color: 'blue'}} id="btn-more" onClick={this.loadMore}>show more</a>
            <span id="text-more" style={{display: 'none'}}>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', </span><a style={{display: 'none', color: 'blue'}} id="btn-less" onClick={this.loadLess}>show less</a>
            </div>
          </div>
          <div className="extra content">
            <a className="btn btn-info btn-partner">
                Request partner
            </a>
            <a className="btn btn-secondary btn-partner">
                Ignore
            </a>
            <div>1h ago</div>
          </div>
        </div>
      </div>
    );
  }
}

export default PartnerFinderItem;
