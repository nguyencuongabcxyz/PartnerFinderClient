import { NotificationService } from '../../_services/notification';
import { FETCH_ALL_NOTIFICATIONS, REMOVE_ONE_NOTIFICATION, MARK_VIEW_NOTIFICATION } from './type';

export const fetchManyNotifications = (index, size) => async (dispatch) => {
    const data = await NotificationService.getMany(index, size);
    if (data){
        dispatch({
            type: FETCH_ALL_NOTIFICATIONS,
            notifications: data,
        })
    }
}

export const removeOneNotification = (id) => async (dispatch) => {
    const data = await NotificationService.remove(id);
    if (data){
        dispatch({
            type: REMOVE_ONE_NOTIFICATION,
            id,
        })
    }
}

export const markViewNotification = (id) => async (dispatch) => {
    const data = await NotificationService.markView(id);
    if (data){
        dispatch({
            type: REMOVE_ONE_NOTIFICATION,
            notification: data,
        })
    }
}