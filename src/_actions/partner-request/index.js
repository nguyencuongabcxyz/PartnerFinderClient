import { FETCH_MANY_PARTNER_REQUEST, ADD_ONE_PARTNER_REQUEST, REMOVE_ONE_PARTNER_REQUEST } from "./type";
import { PartnerRequestService } from "../../_services/partner-request";
import { PartnershipService } from '../../_services/partnership';
import { toast } from "react-toastify";

export const fetchManyPartnerRequests = (index, size) => async dispatch => {
  const result = await PartnerRequestService.getMany(index, size);
  if (result) {
    dispatch({
      type: FETCH_MANY_PARTNER_REQUEST,
      partnerRequests: result.partnerRequests,
      count: result.count
    });
  }
};

export const removeOnePartnerFinder = (id) => async dispatch => {
    const data = await PartnerRequestService.removeOne(id);
    if(data && data.result) {
        dispatch({
            type: REMOVE_ONE_PARTNER_REQUEST,
            id,
        });
    }
}

export const addOnePartnerRequest = (content, receiverId) => async dispatch => {
  await PartnerRequestService.addOne(content, receiverId);
  dispatch({
    type: ADD_ONE_PARTNER_REQUEST
  });
  toast.success("Send request successfully!");
};

export const acceptOnePartnerRequest = (requestId, partnerId) => async dispatch => {
    const data = await PartnershipService.addOne(partnerId);
    if (data && data.result){
        dispatch(removeOnePartnerFinder(requestId))
    }
}