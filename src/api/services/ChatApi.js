import BASE_URL from './BaseUrl';
import axios from 'axios';
const token = localStorage.getItem("token");

export const getAllChat = async (id, userId) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${BASE_URL}/chat?senderId=${userId}&receiverId=${id}`,
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.request(config);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
