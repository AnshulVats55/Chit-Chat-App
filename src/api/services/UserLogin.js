import { RequestWithoutToken } from './Request';

export const handleUserLogin = async (data) => {
  const response = await RequestWithoutToken("post", "/login", data);
  return response;
}