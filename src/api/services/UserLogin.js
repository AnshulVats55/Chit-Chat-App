import Instance from "./Interceptors";

export const handleUserLogin = async (data) => {
  try{
    const response = await Instance({
      method:"POST",
      data,
      url:'/login'
    })
    return response;
  }
  catch(error){
    return error;
  }
}