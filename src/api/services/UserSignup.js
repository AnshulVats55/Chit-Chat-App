import IP_ADDRESS from '../../api/IPAddress';

const axios = require("axios");

export const handleUserSignup = async (data) => {
    let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${IP_ADDRESS}/v1/signup`,
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
        console.group(error);
      }
}