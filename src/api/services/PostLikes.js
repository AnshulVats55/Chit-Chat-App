import IP_ADDRESS from "../IPAddress";
const axios = require("axios");

export const handleAddLikes = async(data)=>{

    let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${IP_ADDRESS}/v1/like`,
        headers: {
          token: localStorage.getItem("token"),
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

export const handleDeleteLikes = async (likeId) => {
    let config = {
        method: "delete",
        maxBodyLength: Infinity,
        url: `${IP_ADDRESS}/v1/like/${likeId}`,
        headers: {
          token: localStorage.getItem("token"),
        },
        mode: "no-mode",
        referrerPolicy: "no-referrer",
      };

      try{
        const response = await axios.request(config);
        return response;
      }
      catch(error){
        console.log(error);
      }
}

