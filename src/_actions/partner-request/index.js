import { 
  FETCH_MANY_PARTNER_REQUEST, 
  ADD_ONE_PARTNER_REQUEST, 
  REMOVE_ONE_PARTNER_REQUEST,
  ACCEPT_ONE_PARTNER_REQUEST
 } from "./type";
import { PartnerRequestService } from "../../_services/partner-request";
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

export const removeOnePartnerRequest = (id) => async dispatch => {
    const data = await PartnerRequestService.removeOne(id);
    if(data && data.result) {
        dispatch({
            type: REMOVE_ONE_PARTNER_REQUEST,
            id,
        });
    }
}

export const acceptOnePartnerRequest = (id) => async dispatch => {
  const data = await PartnerRequestService.acceptOne(id);
  if(data && data.result) {
    dispatch({
      type: ACCEPT_ONE_PARTNER_REQUEST,
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