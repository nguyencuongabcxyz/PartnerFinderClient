import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth';
import registrationReducer from './registration';
import partnerFinderReducer from './partner-finder';
import dbQuestionPostReducer from './dashboard-post/db-question-post';
import dbFeedbackPostReducer from './dashboard-post/db-feedback-post';
import questionPostReducer from './post/question-post';
import userInfoReducer from './user-info';
import commentReducer from './comment';

export default combineReducers({
    form: formReducer,
    auth: authReducer,
    registrationResult: registrationReducer,
    partnerFinder: partnerFinderReducer,
    dbQuestionPost: dbQuestionPostReducer,
    dbFeedbackPost: dbFeedbackPostReducer,
    questionPost: questionPostReducer,
    userInfo: userInfoReducer,
    comment: commentReducer
});

