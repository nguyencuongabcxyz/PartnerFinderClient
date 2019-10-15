import React from 'react';
import PageLayout from '../layout/PageLayout';

class QuestionManagement extends React.Component {
    render() {
        return (
            <PageLayout>
                <div className="asking-question">
                    {this.props.children}
                </div>
            </PageLayout>
        );
    }
}

export default QuestionManagement;