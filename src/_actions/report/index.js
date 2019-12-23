import {ADD_ONE_REPORT, FETCH_ALL_REPORTS, DELETE_ONE_REPORT} from './type';
import { ReportService } from '../../_services/report';

export const createFeedbackPost = (feedbackPost) => async (dispatch) => {
    var result = await PostService.createFeedbackPost(feedbackPost);
    if (result){
        dispatch({
            type: CREATE_FEEDBACK_POST,
            feedbackPost: result,
        });
        history.push(`/feedback-detail/${result.id}`)
    }
}

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

export const fetchAll = () => async (dispatch) => {
    var data = await ReportService.fetchAll();
    if(data) {
        dispatch({
            type: FETCH_ALL_REPORTS,
            reports: data,
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