import { FETCH_MANY_PARTNER_REQUEST } from './type';
import { PartnerRequestService } from '../../_services/partner-request';

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