import BASE_URL from "./BaseUrl";
const axios = require("axios");
const userToken = localStorage.getItem("token");

export const allUSers = async () => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${BASE_URL }/user`,
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

export const allRequests = async (userId) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${BASE_URL }/relationship/request?id=${userId}`,
    headers: {
      authorization: `Bearer ${userToken}`,
    },
  };

  try {
    const response = await axios.request(config);
    return response.data.data.followers;
  } catch (error) {
    console.log(error);
  }
};
