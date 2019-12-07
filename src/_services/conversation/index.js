import apiClient from "../../interceptor";

const getAll = async () => {
  const response = await apiClient.get("/conversations");
  return response.data;
};

const getOne = async id => {
  const response = await apiClient.get(`/conversations/${id}`);
  return response.data;
};

export const ConversationService = {
  getAll,
  getOne
};
