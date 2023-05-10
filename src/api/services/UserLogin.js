import { Request } from './Request';

export const handleUserLogin = async (data) => {
  const response = await Request("post", "/v1/login", data, "");
  return response;
}