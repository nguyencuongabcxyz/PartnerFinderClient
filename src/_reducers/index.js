import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import registrationReducer from './registrationReducer';
import partnerFinderReducer from './partnerFinderReducer';

export default combineReducers({
    form: formReducer,
    auth: authReducer,
    registrationResult: registrationReducer,
    partnerFinder: partnerFinderReducer
});

