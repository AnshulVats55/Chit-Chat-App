import { RequestWithoutToken } from './Request';

export const handleUserSignup = async (data) => {//post req
    const response = await RequestWithoutToken("post", "/v1/signup", data);
    return response;
}