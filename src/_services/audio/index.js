import mediaApi from '../../media.interceptor';

const uploadAudioToMediaServer = async (file, callback) => {
    const formData = new FormData();
    formData.append('audio', file);
    const response = await mediaApi.post('/audio', formData, {
        onUploadProgress : progressEvent => {
            const uploadingPercentage = (progressEvent.loaded / progressEvent.total) * 100;
            callback(uploadingPercentage);
        }
    });
    return response.data;
}

export const AudioService = {
     uploadAudioToMediaServer,
}