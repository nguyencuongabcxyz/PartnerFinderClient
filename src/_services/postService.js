import apiClient from '../interceptor';

const getManyQuestionPosts = async (index, size) => {
    var response = await apiClient.get(`/posts/questionposts?index=${index}&&size=${size}`);
    return response.data;
}

const getManyFeedbackPosts = async (index, size) => {
    var response = await apiClient.get(`/posts/feedbackposts?index=${index}&&size=${size}`);
    return response.data;
}

export const postService = {
    getManyQuestionPosts,
    getManyFeedbackPosts
}