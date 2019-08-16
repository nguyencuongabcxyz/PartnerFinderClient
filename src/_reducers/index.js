import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import registrationReducer from './registrationReducer';

export default combineReducers({
    form: formReducer,
    auth: authReducer,
    registrationResult: registrationReducer
});

