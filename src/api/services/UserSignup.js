import Instance from "./Interceptors";

 const handleUserSignup = async (data) => {
  try{
    const response = await Instance({
      url:"/signup",
      data,
      method:'POST'
    })
    return response;
  }
  catch(err){
   console.log(err);
  }
 
};

export default handleUserSignup;