import mediaApi from '../../media.interceptor';

const uploadImageToMediaServer = async (file, callback) => {
    const formData = new FormData();
    formData.append('image', file);
    const response = await mediaApi.post('/images', formData, {
        onUploadProgress : progressEvent => {
            const uploadingPercentage = (progressEvent.loaded / progressEvent.total) * 100;
            callback(uploadingPercentage);
        }
    });
    return response.data;
}

export const ImageService = {
     uploadImageToMediaServer,
}