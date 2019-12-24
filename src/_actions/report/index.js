import {ADD_ONE_REPORT, FETCH_ALL_REPORTS, DELETE_ONE_REPORT} from './type';
import { ReportService } from '../../_services/report';
import {toast} from 'react-toastify';

export const addOne = (report) => async (dispatch) => {
    console.log(report);
    var data = await ReportService.addOne(report);
    if(data && data.result){
        dispatch({
            type: ADD_ONE_REPORT,
        });
        toast.success("Send request successfully!");
    }
}

export const fetchAll = (index, size) => async (dispatch) => {
    var data = await ReportService.fetchAll(index, size);
    if(data) {
        dispatch({
            type: FETCH_ALL_REPORTS,
            reports: data.reports,
            count: data.count,
        });
    }
}

export const deleteOne = (id) => async(dispatch) => {
    var data = await ReportService.deleteOne(id);
    if(data && data.result) {
        dispatch({
            type: DELETE_ONE_REPORT,
            id: id,
        });
    }
}