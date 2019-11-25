import {
    ADD_ONE_PARTNER,
    FETCH_ALL_PARTNERS,
    REMOVE_ONE_PARTNER,
} from './type';
import { PartnershipService } from '../../_services/partnership';

export const addOnePartner = (partnerId) => async (dispatch) => {
    var data = await PartnershipService.addOne(partnerId);
    if(data) {
        dispatch({
            type: ADD_ONE_PARTNER,
            partner: data,
        });
    }
}

export const fetchAllPartners = () => async (dispatch) => {
    var data = await PartnershipService.fetchAll();
    if(data) {
        dispatch({
            type: FETCH_ALL_PARTNERS,
            partners: data,
        });
    }
}

export const deleteOnePartner = (partnerId) => async (dispatch) => {
    var data = await PartnershipService.deleteOne(partnerId);
    if (data) {
        dispatch({
            type: REMOVE_ONE_PARTNER,
            partner: data,
        });
    }
}