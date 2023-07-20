import axiosInstance from "./axios.js";

export const putRequest = async function (email, userDetails) {
  try {
    const response = await axiosInstance.put(`/users/${email}`, userDetails);
  } catch (err) {}
};

export const getRequest = async function () {
  try {
    const response = await axiosInstance.get("/users");
    return response;
  } catch (err) {}
};

export const deleteRequest = async function (email) {
  try {
    const response = await axiosInstance.delete(`/users/${email}`);
  } catch (err) {}
};

export const postRequest = async function (userDetails) {
  try {
    const response = await axiosInstance.post("/users", userDetails);
    return response;
  } catch (err) {}
};
