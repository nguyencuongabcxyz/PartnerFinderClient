import {
    FETCH_ADMIN_USERS,
    SEARCH_ADMIN_USERS, 
    BLOCK_USER,
    ACTIVE_USER
} from './type';

import {
    AdminUserService
} from '../../_services/adminUser';


export const fetchAdminUsers = (index, size) => async (dispatch) => {
    const data = await AdminUserService.getAllUsers(index, size);
    if (data){
        dispatch({
            type: FETCH_ADMIN_USERS,
            users: data.users,
            count: data.count,
        })
    }
}

export const searchAdminUser = (pattern) => async (dispatch) => {
    const data = await AdminUserService.search(pattern);
    if(data) {
        dispatch({
            type: SEARCH_ADMIN_USERS,
            users: data,
        })
    }
}

export const blockUser = (userId) => async (dispatch) => {
    const data = await AdminUserService.blockUser(userId);
    if(data) {
        dispatch({
            type: BLOCK_USER,
            user: data,
        })
    }
}

export const activeUser = (userId) => async (dispatch) => {
    const data = await AdminUserService.activeUser(userId);
    if(data) {
        dispatch({
            type: ACTIVE_USER,
            user: data,
        })
    }
}