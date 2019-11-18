import {
    FETCH_MANY,
    IGNORE
} from './type'

import { PartnerFinderService } from '../../_services/partner-finder'

export const fetchManyFinders = (index, size, location, level) => async (dispatch) => {
    var result = await PartnerFinderService.getMany(index, size, location, level);
    if(result){
    dispatch({
        type: FETCH_MANY,
        partnerFinders: result.partnerFinders,
        count: result.count
    });
}
}