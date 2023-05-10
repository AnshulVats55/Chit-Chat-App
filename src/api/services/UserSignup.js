import { Request } from './Request';

export const handleUserSignup = async (data) => {//post req
    const response = await Request("post", "/v1/signup", data, "");
    return response;
}