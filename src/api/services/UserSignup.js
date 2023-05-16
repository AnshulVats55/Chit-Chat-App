import AuthorizedInstance from './Interceptors';

export const handleUserSignup = async (data) => {
    const response = await AuthorizedInstance.post("/signup",data)
    return response;
}