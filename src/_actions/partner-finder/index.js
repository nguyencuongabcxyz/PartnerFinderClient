import {
    FETCH_MANY,
    FETCH_MANY_WITH_FILTER,
    IGNORE
} from './type'

import { PartnerFinderService } from '../../_services/partner-finder'

export const fetchManyFinders = (index, size) => async (dispatch) => {
    var result = await PartnerFinderService.getMany(index, size);
    if(result){
    dispatch({
        type: FETCH_MANY,
        partnerFinders: result.partnerFinders,
        count: result.count
    });
}
}

export const fetchManyWithFilter = (filterData, index, size) => async (dispatch) => {
    var result = await PartnerFinderService.getManyWithFilter(filterData, index, size);
    if(result){
        dispatch({
            type: FETCH_MANY_WITH_FILTER, 
            partnerFinders: result.partnerFinders,
            count: result.count
        })
    }
}