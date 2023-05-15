// import{ Request } from '../services/Request';
// import { DeleteRequest } from '../services/Request'
import authorizedInstance from "./Interceptors";
// const token = localStorage.getItem("token");

export const handleAddLikes = async (data) => {
  // const response = await Request("post", "/like", data, token);
  try{
    const response = await authorizedInstance.post("/like", data);
  return response;
  }
  catch(err){
    console.log(err)
  }
  
};

export const handleDeleteLikes = async (id) => {
  // const response = await DeleteRequest("delete", "/like/", likeId, token);
  try{
    const response = await authorizedInstance.delete(`/like/${id}`);
    return response;
  }
  catch(err){
    console.log(err)
  }
  
};
