import apiClient from '../../interceptor';

const getManyByPostId = async (postId) => {
    const response = await apiClient.get(`/posts/${postId}/comments`)
    return response.data;
}

const addParentComment = async (postId, content) => {
    var data = {
        postId,
        content,
    }
    const response = await apiClient.post('/comments', data);
    return response.data;
}

const addSubComment = async (parentId, content) => {
    var data = {
        parentId,
        content,
    }
    const response = await apiClient.post('/comments', data);
    return response.data;
}

export const CommentService = {
    getManyByPostId,
    addParentComment,
    addSubComment
}

