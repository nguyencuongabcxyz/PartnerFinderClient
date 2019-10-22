import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth';
import registrationReducer from './registration';
import partnerFinderReducer from './partner-finder';
import questionPostReducer from './question-post';
import feedbackPostReducer from './feedback-post';
import userInfoReducer from './user-info';

export default combineReducers({
    form: formReducer,
    auth: authReducer,
    registrationResult: registrationReducer,
    partnerFinder: partnerFinderReducer,
    questionPost: questionPostReducer,
    feedbackPost: feedbackPostReducer,
    userInfo: userInfoReducer
});

