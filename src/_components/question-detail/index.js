import React from 'react';
import { connect } from 'react-redux';

import './style.css';
import PageLayout from '../layout/PageLayout';

class QuestionDetail extends React.Component {
    render() {
        console.log(this.props.questionPosts);
        return(
            <PageLayout>
                <div>QuestionDetail</div>
            </PageLayout>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { questionPosts } = state.questionPost;
    const { id } = ownProps.match.params.id;
    return {
        questionPosts : questionPosts,
    };
}

export default connect(mapStateToProps, {})(QuestionDetail);