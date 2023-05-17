import AuthorizedInstance from './Interceptors';

export const handleUserSignup = async (data) => {
    try{
        const response = await AuthorizedInstance.post("/signup",data)
        return response;
    }
    catch(error){
        return error;
    }
}