import { RequestWithoutToken } from './Request';

export const handleUserLogin = async (data) => {
  const response = await RequestWithoutToken("post", "/v1/login", data);
  return response;
}