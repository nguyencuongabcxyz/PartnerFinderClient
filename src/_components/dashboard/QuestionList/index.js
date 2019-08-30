import React from 'react'
import './style.css';
import QuestionItem from '../QuestionItem';

class QuestionList extends React.Component {
    render() {
        return (
            <div id="question-list">
                <h1 className="dashboard-title">Top questions</h1>
                <div className="right-section-content">
                    <QuestionItem />
                    <QuestionItem />
                    <QuestionItem />
                    <QuestionItem />
                    <QuestionItem />
                </div>
                <div className="paging-wrapper">
                    <div className="paging-right">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center">
                                <li className="page-item disabled">
                                    <a className="page-link" href="#" tabIndex="-1">Previous</a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuestionList;