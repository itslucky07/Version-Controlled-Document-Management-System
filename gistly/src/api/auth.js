import api from "./client";

export const fetchCurrentUser = async () => {
  const response = await api.get("auth/user/");
  console.log(response)
  return response.data;
};

export const fetchAuthToken = async () => {
  const response = await api.get("auth1/token/");
  // localStorage.setItem("authToken", token);
  return response.data.token;
};

export const logout = async () => {
  // await api.post("auth/logout/");
  localStorage.removeItem("authToken");
};
