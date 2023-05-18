import Instance from "./Interceptors";

export const allUSers = async () => {


  try {
    const response = await Instance({
      url:"/user",
      method:"GET"
    });
    return response.data.data;
  }
  catch(error){
    return error;
  }
};

export const allRequests = async (userId) => {
 

  try {
    const response = await Instance({
      url: `/relationship/request?id=${userId}`,
      method:"GET"
    });
    return response.data.data.followers;
  }
  catch(error){
    return error;
  }
};
