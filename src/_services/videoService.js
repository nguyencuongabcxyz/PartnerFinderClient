import mediaApi from '../media.interceptor';

const uploadVideoToMediaServer = async (file) => {
    const formData = new FormData();
    formData.append('video', file);
    const response = await mediaApi.post('/videos', formData, {
        onUploadProgress : progressEvent => {
            console.log('upload progress: ' + (progressEvent.loaded / progressEvent.total) * 100 );
        }
    });
    return response.data;
}

export const videoService = {
     uploadVideoToMediaServer,
}