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
    var response = await apiClient.get(`/posts/${id}/question-post`);
    return response.data;
}

const createFeedbackPost = async (feedbackPost) => {
    var reponse = await apiClient.post('/posts/feedback-post', feedbackPost);
    return reponse.data;
}

const getFeedbackPost = async (id) => {
    var response = await apiClient.get(`/posts/${id}/feedback-post`);
    return response.data;
}

const updateQuestionPostUpVote = async (id) => {
    var response = await apiClient.patch(`/posts/${id}/question-post/up-vote`);
    return response.data;
}

const updateFeedbackPostUpVote = async (id) => {
    var response = await apiClient.patch(`/posts/${id}/feedback-post/up-vote`);
    return response.data;
}

const checkIfUserVotedPost = async (id) => {
    var reponse = await apiClient.get(`/posts/${id}/check-vote`);
    return reponse.data;
}

const searchForFeedbackPost = async (pattern) => {
    var reponse = await apiClient.get(`/posts/feedback-post/search?pattern=${pattern}`);
    return reponse.data;
}

const searchForQuestionPost = async (pattern) => {
    var response = await apiClient.get(`/posts/question-post/search?pattern=${pattern}`);
    return response.data;
}

export const PostService = {
    getManyQuestionPosts,
    getManyFeedbackPosts,
    createQuestionPost,
    getQuestionPost,
    createFeedbackPost,
    getFeedbackPost,
    updateQuestionPostUpVote,
    checkIfUserVotedPost,
    updateFeedbackPostUpVote,
    searchForFeedbackPost,
    searchForQuestionPost
}