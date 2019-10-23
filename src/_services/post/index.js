import apiClient from '../../interceptor';

const getManyQuestionPosts = async (index, size) => {
    var response = await apiClient.get(`/posts/question-posts?index=${index}&&size=${size}`);
    return response.data;
}

const getManyFeedbackPosts = async (index, size) => {
    var response = await apiClient.get(`/posts/feedback-posts?index=${index}&&size=${size}`);
    return response.data;
}

export const PostService = {
    getManyQuestionPosts,
    getManyFeedbackPosts
}