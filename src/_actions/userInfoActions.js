import { userService } from '../_services/userService';
import history from '../history';
import { toast } from 'react-toastify';

import {
    FETCH_ONE,
    UPDATE_ONE
} from '../_constants/userInfoConstants';

export const fetchOneUserInfo = (userId) =>  async (dispatch) => {
    var result = await userService.getOne(userId);
    if (result){
        dispatch({
            type: FETCH_ONE,
            data : result,
            fetching: false,
        })
    }
}

export const updateOneUserInfo  = (userId, userInfo) => async (dispatch) => {
    dispatch({
        type: 'UPDATING',
        updating: true,
    })
    var result = await userService.updateInfo(userId, userInfo);
    if (result){
        dispatch({
            type: UPDATE_ONE,
            data: result,
            updating: false,
        })
        toast.success("Update successfully!");
        history.push("/userinfo");
    }
}