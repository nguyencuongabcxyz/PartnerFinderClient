import { userService } from '../_services/userService';

import {
    FETCH_ONE
} from '../_constants/userInfoConstants';

export const fetchOneUserInfo = (userId) =>  async (dispatch) => {
    var result = await userService.getOne(userId);
    if(result){
        dispatch({
            type: FETCH_ONE,
            userInfo : result
        })
    }
}