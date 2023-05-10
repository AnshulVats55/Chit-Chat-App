import BASE_URL from "./BaseUrl";
const axios = require("axios");

export const Request = async (method, endPoint, data, token) => {
    let config = {
        method: method,
        maxBodyLength: Infinity,
        url: `${BASE_URL}${endPoint}`,
        headers: {
            token: token,
            "Content-Type": "application/json",
        },
        mode:'no-mode',
        referrerPolicy:'no-referrer',
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

export const DeleteRequest = async (method, endPoint, data, token,) => {
    let config = {
        method: method,
        maxBodyLength: Infinity,
        url: `${BASE_URL}${endPoint}${data}`,
        headers: {
          token: token,
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

export const RequestWithoutToken = async (method, endPoint, data) => {
    let config = {
      method: method,
      maxBodyLength: Infinity,
      url: `${BASE_URL}${endPoint}`,
      headers: {
          "Content-Type": "application/json",
      },
      mode:'no-mode',
      referrerPolicy:'no-referrer',
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