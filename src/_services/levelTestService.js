import axios from "axios";

const levelTest = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/levelTests`
});

const getRandomTest = async () => {
  try {
    const response = await levelTest.get("/random");
    console.log(response);
    return response;
  } catch (e) {
      return e.response;
  }
};

export const levelTestService = {
    getRandomTest
}
