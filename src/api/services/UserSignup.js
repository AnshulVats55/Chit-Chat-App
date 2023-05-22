import Instance from './Interceptors';

export const handleUserSignup = async (data) => {
    try{
        const response = await Instance({
            method:"POST",
            data,
            url:'/signup'
          })
        return response;
    }
    catch(error){
        return error;
    }
}