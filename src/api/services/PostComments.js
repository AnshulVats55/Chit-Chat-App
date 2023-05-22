import Instance from "./Interceptors";

export const handleAddComments = async (data) => {
  try{
    const response = await Instance({
      url:'/comment',
      data,
      method:"POST"
    })
    return response;
  }
  catch(error){
    return error;
  }   
};

export const handleDeleteComments = async (id) => {
  try{
    const response = await Instance({
      url:`/comment/${id}`,
      method:"DELETE"
    })
    return response;
  }
  catch(error){
    return error;
  }
};
