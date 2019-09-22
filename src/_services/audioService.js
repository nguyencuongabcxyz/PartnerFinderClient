import mediaApi from '../media.interceptor';

const uploadAudioToMediaServer = async (file) => {
    const formData = new FormData();
    formData.append('audio', file);
    const response = await mediaApi.post('/audio', formData, {
        onUploadProgress : progressEvent => {
            console.log('upload progress: ' + (progressEvent.loaded / progressEvent.total) * 100 );
        }
    });
    return response.data;
}

export const audioService = {
     uploadAudioToMediaServer,
}