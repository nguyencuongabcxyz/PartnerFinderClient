import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth';
import registrationReducer from './registration';
import partnerFinderReducer from './partner-finder';
import dbQuestionPostReducer from './dashboard-post/db-question-post';
import dbFeedbackPostReducer from './dashboard-post/db-feedback-post';
import questionPostReducer from './post/question-post';
import feedbackPostReducer from './post/feedback-post';
import userInfoReducer from './user-info';
import commentReducer from './comment';
import partnerRequestReducer from './partner-request';
import partnershipReducer from './partnership';

export default combineReducers({
    form: formReducer,
    auth: authReducer,
    registrationResult: registrationReducer,
    partnerFinder: partnerFinderReducer,
    dbQuestionPost: dbQuestionPostReducer,
    dbFeedbackPost: dbFeedbackPostReducer,
    questionPost: questionPostReducer,
    feedbackPost: feedbackPostReducer,
    userInfo: userInfoReducer,
    comment: commentReducer,
    partnerRequest: partnerRequestReducer,
    partnerships: partnershipReducer,
});

