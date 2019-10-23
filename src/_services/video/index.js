import mediaApi from '../../media.interceptor';

const uploadVideoToMediaServer = async (file, callback) => {
    const formData = new FormData();
    formData.append('video', file);
    const response = await mediaApi.post('/videos', formData, {
        onUploadProgress : progressEvent => {
            const uploadingPercentage = (progressEvent.loaded / progressEvent.total) * 100;
            callback(uploadingPercentage);
        }
    });
    return response.data;
}

export const VideoService = {
     uploadVideoToMediaServer,
}