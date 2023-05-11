import{ Request } from '../services/Request';
import { DeleteRequest } from '../services/Request'
const token = localStorage.getItem("token");

export const handleAddLikes = async(data)=>{
  const response = await Request("post", "/v1/like", data, token);
  return response;
}

export const handleDeleteLikes = async (likeId) => {
    const response = await DeleteRequest("delete", "/v1/like/", likeId, token);
    return response;
}

