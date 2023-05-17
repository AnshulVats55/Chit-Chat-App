import authorizedInstance from "./Interceptors";

export const handleAddComments = async (data) => {
  try{
    const response = await authorizedInstance.post("/comment", data);
    return response;
  }
  catch(error){
    return error;
  }   
};

export const handleDeleteComments = async (id) => {
  try{
    const response = await authorizedInstance.delete(`/comment/${id}`);
    return response;
  }
  catch(error){
    return error;
  }
};
