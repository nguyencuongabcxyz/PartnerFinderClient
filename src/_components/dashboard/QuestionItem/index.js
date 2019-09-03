import './style.css';
import React from 'react';
import { getPostedTimeAgo } from '../../../_helpers/dateTimeHelper';

class QuestionItem extends React.Component {
    render() {
        return (
            <div className="item-content">
                <div className="answer-number">{this.props.questionPost.answerNumber} Answers</div>
                <div className="question-body">
                <div className="question-top">
                    <a href="#">{this.props.questionPost.title}</a>
                </div>
                <div className="question-bottom">
                    <a href="#" className="owner-block ui teal image label">
                        <img src={this.props.questionPost.avatar} alt="avatar" />
                        {this.props.questionPost.name}
                    </a>
                    <div style={{marginRight: '5px'}}>{getPostedTimeAgo(this.props.questionPost.updatedDate)}</div>
                </div>
                </div>
            </div>
        );
    }
}

export default QuestionItem;