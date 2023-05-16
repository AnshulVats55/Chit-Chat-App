// import { RequestWithoutToken } from './Request';
import AuthorizedInstance from "./Interceptors";
export const handleUserLogin = async (data) => {
  // const response = await RequestWithoutToken("post", "/login", data);
  const response = await AuthorizedInstance.post("/login",data)
  return response;
}