const INITIAL_STATE = {
    questionPosts : [],
    count : 0
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case FETCH_MANY :
            return {...state, partnerFinders: action.partnerFinders, count: action.count}
        default : 
        return state;
    }
}