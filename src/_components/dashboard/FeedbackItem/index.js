import './style.css';
import React from 'react';
import { getPostedTimeAgo } from '../../../_helpers/dateTimeHelper';

class FeedbackItem extends React.Component {

    renderFeedbackType = () => {
        const feedbackType = this.props.feedbackPost.type;
        if(feedbackType === 1){
            return (
                <div className="ui orange label">Written</div>
            );
        }else if(feedbackType === 2){
            return (
                <div className="ui green label">Spoken</div>
            );
        }else{
            return null;
        }
    }

    render(){
        return(
            <div>
                <div className="item-content">
                    <div>
                <div className="answer-number">{this.props.feedbackPost.answerNumber} answers</div>
                {this.renderFeedbackType()}
                </div>
                <div className="question-body">
                <div className="question-top">
                    <a href="#">{this.props.feedbackPost.title}</a>
                </div>
                <div className="question-bottom">
                    <a href="#" className="owner-block ui teal image label">
                        <img src={this.props.feedbackPost.avatar} alt="avatar" />
                        {this.props.feedbackPost.name}
                    </a>
                    <div style={{marginRight: '5px'}}>{getPostedTimeAgo(this.props.feedbackPost.updatedDate)}</div>
                </div>
                </div>
            </div>
            </div>
        );
    }
}

export default FeedbackItem ;