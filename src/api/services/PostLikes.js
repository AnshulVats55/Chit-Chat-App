import{ Request } from '../services/Request';
import { DeleteRequest } from '../services/Request'
const token = localStorage.getItem("token");

export const handleAddLikes = async(data)=>{
  const response = await Request("post", "/like", data, token);
  return response;
}

export const handleDeleteLikes = async (likeId) => {
    const response = await DeleteRequest("delete", "/like/", likeId, token);
    return response;
}

