import apiClient from '../../interceptor';

const getManyQuestionPosts = async (index, size) => {
    var response = await apiClient.get(`/posts/question-posts?index=${index}&&size=${size}`);
    return response.data;
}

const getManyFeedbackPosts = async (index, size) => {
    var response = await apiClient.get(`/posts/feedback-posts?index=${index}&&size=${size}`);
    return response.data;
}

const createQuestionPost = async (questionPost) => {
    var response = await apiClient.post('/posts/question-post', questionPost);
    return response.data;
}

const getQuestionPost = async (id) => {
    var response = await apiClient.get(`posts/${id}/question-post`);
    return response.data;
}

export const PostService = {
    getManyQuestionPosts,
    getManyFeedbackPosts,
    createQuestionPost,
    getQuestionPost
}