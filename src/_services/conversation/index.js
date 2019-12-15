import apiClient from "../../interceptor";

const getAll = async () => {
  const response = await apiClient.get("/conversations");
  return response.data;
};

const getOne = async id => {
  const response = await apiClient.get(`/conversations/${id}`);
  return response.data;
};

const getCount = async () => {
  const response = await apiClient.get("/conversations/count");
  return response.data;
}

export const ConversationService = {
  getAll,
  getOne,
  getCount,
};
