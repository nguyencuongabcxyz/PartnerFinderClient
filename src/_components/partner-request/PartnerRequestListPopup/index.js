import React from 'react';
import './style.css';
import faker from 'faker';

class PartnerRequestListPopup extends React.Component {

    renderItem = () => {
        return (
        <div className="pr-popup-item-wrapper">
          <div className="ui feed">
            <div className="event">
              <div className="label">
                <img src={faker.image.avatar()} />
              </div>
              <div className="content">
                <div className="date">3 days ago</div>
                <div className="summary">
                  You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                </div>
              </div>
            </div>
          </div>
          </div>
        );
    }

    render(){
        return (
            <div className="pr-popup-container">
                <div className="pr-popup-header">
                    <h3>Partner requests</h3>
                </div>
                <div className="pr-popup-body">
                <p>New</p>
                    {this.renderItem()}
                    {this.renderItem()}
                    {this.renderItem()}
                    {this.renderItem()}
                    {this.renderItem()}
                    {this.renderItem()}
                    {this.renderItem()}
                    {this.renderItem()}
                    {this.renderItem()}
                    {this.renderItem()}
                    {this.renderItem()}
                    {this.renderItem()}
                    {this.renderItem()}
                    {this.renderItem()}
                    {this.renderItem()}
                    {this.renderItem()}
                </div>
                <div className="pr-popup-footer">
                    <a href="#"><span>See all</span></a>
                </div>
            </div>
        );
    };
}

export default PartnerRequestListPopup;