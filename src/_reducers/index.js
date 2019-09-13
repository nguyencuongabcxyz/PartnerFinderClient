import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import registrationReducer from './registrationReducer';
import partnerFinderReducer from './partnerFinderReducer';
import questionPostReducer from './questionPostReducer';
import feedbackPostReducer from './feedbackPostReducer';
import userInfoReducer from './userInfoReducer';

export default combineReducers({
    form: formReducer,
    auth: authReducer,
    registrationResult: registrationReducer,
    partnerFinder: partnerFinderReducer,
    questionPost: questionPostReducer,
    feedbackPost: feedbackPostReducer,
    userInfo: userInfoReducer
});

