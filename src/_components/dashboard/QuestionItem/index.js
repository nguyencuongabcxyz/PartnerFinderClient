import './style.css';
import React from 'react'

class QuestionItem extends React.Component {
    render() {
        return (
            <div className="item-content">
                <div className="answer-number">5 answer</div>
                <div className="question-body">
                <div className="question-top">
                    <a href="#">Using AWS Amplify to create a SNS endpoint. How to do so?</a>
                </div>
                <div className="question-bottom">
                    <a className="owner-block ui teal image label">
                        <img src="http://localhost:5000/images/myavatar.jpg" />
                        Cuong Nguyen
                    </a>
                    <div style={{marginRight: '5px'}}>2h ago</div>
                </div>
                </div>
            </div>
        );
    }
}

export default QuestionItem;