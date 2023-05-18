
import Instance from "./Interceptors";
 const handleUserLogin = async (data) => {
  try{
    const response = await Instance({
      url:'/login',
      data,
      method:'POST'
    })
    return response;
  }
  catch(err){
   console.log(err);
  }
  
};
export default handleUserLogin;