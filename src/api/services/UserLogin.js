import IP_ADDRESS from "../IPAddress";

const axios = require("axios");

export const handleUserLogin = async (data) => {
    let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${IP_ADDRESS}/v1/login`,
        headers: {
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