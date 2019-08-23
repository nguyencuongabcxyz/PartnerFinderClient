
const extractUserId = () => {
    const token = localStorage.getItem('token');
    const tokenParts = token.split('.');
    const userInfo =JSON.parse(window.atob(tokenParts[1]));
    return userInfo.userId;
}

export const extractTokenService = {
    extractUserId
}