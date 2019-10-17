import React from 'react';

import PageLayout from '../layout/PageLayout';
import AskingSection from './AskingSection';
import OldQuestionSection from './OldQuestionSection';

import './style.css';

class QuestionManagement extends React.Component {
    render() {
        return (
            <PageLayout>
                <div className="asking-question">
                    <AskingSection />
                    {/* <OldQuestionSection /> */}
                </div>
            </PageLayout>
        );
    }
}

export default QuestionManagement;