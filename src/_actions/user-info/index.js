import { UserService } from '../../_services/user';
import history from '../../history';
import { toast } from 'react-toastify';

import {
    FETCH_ONE,
    UPDATE_ONE,
    UPDATE_MEDIA_PROFILE
} from './type';

export const fetchOneUserInfo = (userId) =>  async (dispatch) => {
    const result = await UserService.getOne(userId);
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
    const result = await UserService.updateInfo(userInfo);
    if (result){
        dispatch({
            type: UPDATE_ONE,
            data: result,
            updating: false,
        })
        toast.success("Update successfully!");
        history.push("/user-info");
    }
}

export const updateMediaProfile = (mediaProfile) => async (dispatch) => {
    const result = await UserService.updateMediaProfile(mediaProfile);
    if(result) {
        dispatch({
            type: UPDATE_MEDIA_PROFILE,
            data: result,
            updating: false,
        })
        toast.success("Upload successfully!");
    }
}

