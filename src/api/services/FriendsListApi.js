import BASE_URL from "./BaseUrl";
const axios = require("axios");
const userToken = localStorage.getItem("token");

export const getFriends = async (userId) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${BASE_URL }/relationship/all/${userId}`,
    headers: {
      authorization: `Bearer ${userToken}`,
    },
  };
  try {
    const response = await axios.request(config);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
