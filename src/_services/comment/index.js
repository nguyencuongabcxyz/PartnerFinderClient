import apiClient from '../../interceptor';

const getManyByPostId = async (postId) => {
    const response = await apiClient.get(`/posts/${postId}/comments`)
    return response.data;
}

export const CommentService = {
    getManyByPostId
}

