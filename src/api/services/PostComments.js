import IP_ADDRESS from "../IPAddress";

const axios = require("axios");
const userToken = localStorage.getItem("token");

export const handleAddComments = async (data) => {
    let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${IP_ADDRESS}/v1/comment`,
        headers: {
          token: userToken,
          "Content-Type": "application/json",
        },
        mode: "no-mode",
        referrerPolicy: "no-referrer",
        data: data,
      };

      try{
        const response = await axios.request(config);
        return response;
      }
      catch(error){
        console.log(error);
      }
}

export const handleDeleteComments = async (id) => {
    let config = {
        method: "delete",
        maxBodyLength: Infinity,
        url: `${IP_ADDRESS}/v1/comment/${id}`,
        headers: {
          token: userToken,
        },
      };

      try{
        const response = await axios.request(config);
        return response;
      }
      catch(error){
        console.log(error);
      }
}