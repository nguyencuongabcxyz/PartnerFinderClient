import axios from "axios";
import history from '../history';

const levelTest = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/levelTests`
});

const getRandomTest = async () => {
  try {
    const response = await levelTest.get("/random");
    return response.data;
  } catch (e) {
      history.push('/servererror');
  }
};

export const levelTestService = {
    getRandomTest
}
