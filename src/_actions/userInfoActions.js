import { userService } from '../_services/userService';
import history from '../history';
import { toast } from 'react-toastify';

import {
    FETCH_ONE,
    UPDATE_ONE,
    UPDATE_MEDIA_PROFILE
} from '../_constants/userInfoConstants';

export const fetchOneUserInfo = (userId) =>  async (dispatch) => {
    const result = await userService.getOne(userId);
    if (result){
        dispatch({
            type: FETCH_ONE,
            data : result,
            fetching: false,
        })
    }
}

export const updateOneUserInfo  = (userInfo) => async (dispatch) => {
    dispatch({
        type: 'UPDATING',
        updating: true,
    })
    const result = await userService.updateInfo(userInfo);
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

export const updateMediaProfile = (mediaProfile) => async (dispatch) => {
    const result = await userService.updateMediaProfile(mediaProfile);
    if(result) {
        dispatch({
            type: UPDATE_MEDIA_PROFILE,
            data: result,
            updating: false,
        })
        toast.success("Upload successfully!");
    }
}

