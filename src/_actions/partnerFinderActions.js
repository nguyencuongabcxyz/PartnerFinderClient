import {
    FETCH_MANY,
    FETCH_MANY_WITH_FILTER,
    IGNORE
} from '../_constants/partnerFinderConstants'

import { partnerFinderService } from '../_services/partnerFinderService'

export const fetchManyFinders = (index, size) => async (dispatch) => {
    var result = await partnerFinderService.getMany(index, size);
    if(result){
    dispatch({
        type: FETCH_MANY,
        partnerFinders: result.partnerFinders,
        count: result.count
    });
}
}

export const fetchManyWithFilter = (filterData, index, size) => async (dispatch) => {
    console.log(filterData);
    var result = await partnerFinderService.getManyWithFilter(filterData, index, size);
    if(result){
        dispatch({
            type: FETCH_MANY_WITH_FILTER, 
            partnerFinders: result.partnerFinders,
            count: result.count
        })
    }
}