import './style.css';
import React from 'react';
import { getPostedTimeAgo } from '../../../_helpers/dateTimeHelper';
import { Link } from 'react-router-dom';

class QuestionItem extends React.Component {
    render() {
        const { answerNumber, title, userId, avatar, name, updatedDate, id } = this.props.questionPost; 
        return (
            <div className="item-content">
                <div className="answer-number">{answerNumber} Answers</div>
                <div className="question-body">
                <div className="question-top">
                    <a href={`/question-detail/${id}`}>{title}</a>
                </div>
                <div className="question-bottom">
                    <Link to={`/user-info/${userId}`} className="owner-block ui teal image label">
                        <img src={avatar} alt="avatar" />
                        {name}
                    </Link>
                    <div style={{marginRight: '5px'}}>{getPostedTimeAgo(updatedDate)}</div>
                </div>
                </div>
            </div>
        );
    }
}

export default QuestionItem;