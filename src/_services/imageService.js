import mediaApi from '../media.interceptor';

const uploadImageToMediaServer = async (file) => {
    const formData = new FormData();
    formData.append('image', file);
    const response = await mediaApi.post('/images', formData, {
        onUploadProgress : progressEvent => {
            console.log('upload progress: ' + (progressEvent.loaded / progressEvent.total) * 100 );
        }
    });
    return response.data;
}

export const imageService = {
     uploadImageToMediaServer,
}