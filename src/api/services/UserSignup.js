import AuthorizedInstance from './Interceptors';
// import { RequestWithoutToken } from './Request';

export const handleUserSignup = async (data) => {
    // const response = await RequestWithoutToken("post", "/signup", data);
    const response = await AuthorizedInstance.post("/signup",data)
    return response;
}