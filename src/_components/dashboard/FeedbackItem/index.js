import './style.css';
import React from 'react';
import { getPostedTimeAgo } from '../../../_helpers/dateTimeHelper';
import { Link } from 'react-router-dom';

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
        const { answerNumber, title, userId, avatar, name, updatedDate} = this.props.feedbackPost;
        return(
            <div>
                <div className="item-content">
                    <div>
                <div className="answer-number">{answerNumber} answers</div>
                {this.renderFeedbackType()}
                </div>
                <div className="question-body">
                <div className="question-top">
                    <a href="#">{title}</a>
                </div>
                <div className="question-bottom">
                    <Link to={`/userinfo/${userId}`} className="owner-block ui teal image label">
                        <img src={avatar} alt="avatar" />
                        {name}
                    </Link>
                    <div style={{marginRight: '5px'}}>{getPostedTimeAgo(updatedDate)}</div>
                </div>
                </div>
            </div>
            </div>
        );
    }
}

export default FeedbackItem ;