import AuthorizedInstance from "./Interceptors";

export const handleUserLogin = async (data) => {
  try{
    const response = await AuthorizedInstance.post("/login",data)
    return response;
  }
  catch(error){
    return error;
  }
}