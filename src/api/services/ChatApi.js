import Instance from "./Interceptors";

 const getAllChat = async (id, userId) => {
  try{
    const response = await Instance({
      url:`/chat?senderId=${userId}&receiverId=${id}`,
      method:"GET"
    })
    return response.data.data;
  }
  catch(error){
    return error;
  }
};
export {getAllChat}