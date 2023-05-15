// import { Request, DeleteRequest } from '../services/Request';
import authorizedInstance from "./Interceptors";
const token = localStorage.getItem("token");

export const handleAddComments = async (data) => {
  console.log(data)
  // const response = await Request("post", "/comment", data, token);
  try{
    const response = await authorizedInstance.post("/comment", data);
    return response;
  }
  catch(err){
    console.log(err)
  }   
 
};

export const handleDeleteComments = async (id) => {
  //   const response = await DeleteRequest("delete", "/comment/", id, token);
  const response = await authorizedInstance.delete(`/comment/${id}`);
  return response;
};
