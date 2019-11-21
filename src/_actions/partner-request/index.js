import { FETCH_MANY_PARTNER_REQUEST, ADD_ONE_PARTNER_REQUEST } from './type';
import { PartnerRequestService } from '../../_services/partner-request';
import { toast } from 'react-toastify';

export const fetchManyPartnerRequests = (index, size) => async (dispatch) => {
    var result = await PartnerRequestService.getMany(index, size);
    if(result){
    dispatch({
        type: FETCH_MANY_PARTNER_REQUEST,
        partnerRequests: result.partnerRequests,
        count: result.count
    });
    }
}

export const addOnePartnerRequest = (content, receiverId) => async (dispatch) => {
    await PartnerRequestService.addOne(content, receiverId);
    dispatch({
        type: ADD_ONE_PARTNER_REQUEST,
    });
    toast.success("Send request successfully!");
}