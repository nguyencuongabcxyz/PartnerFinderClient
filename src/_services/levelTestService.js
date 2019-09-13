import apiClient from '../interceptor';

const getRandomTest = async () => {
  const response = await apiClient.get("/levelTests/random");
  return response.data;
};

export const levelTestService = {
    getRandomTest
}
