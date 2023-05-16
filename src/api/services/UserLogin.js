import AuthorizedInstance from "./Interceptors";

export const handleUserLogin = async (data) => {
  const response = await AuthorizedInstance.post("/login",data)
  return response;
}