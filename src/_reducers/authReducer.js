const INITIAL_STATE = {
    isSignedIn: null,
    statusCode: 0,
    userId: null
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'LOGIN': 
          return {...state, isSignedIn: action.payload.isSignedIn, statusCode: action.payload.statusCode, userId: action.payload.userId };
        default: 
          return state;
    }
};