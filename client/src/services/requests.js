import axiosInstance from "./axios.js";

export const putRequest = async function (email, userDetails) {
  try {
    const response = await axiosInstance.put(`/users/${email}`, userDetails);
    // console.log(response);
  } catch (err) {
    // console.log(err);
  }
};

export const getRequest = async function () {
  try {
    const response = await axiosInstance.get("/users");
    return response;
  } catch (err) {
    // console.log(err);
  }
};

export const deleteRequest = async function (email) {
  try {
    const response = await axiosInstance.delete(`/users/${email}`);
    // console.log(response);
  } catch (err) {
    // console.log(err);
  }
};

export const postRequest = async function (userDetails) {
  try {
    const response = await axiosInstance.post("/users", userDetails);
    // console.log(response);
    return response;
  } catch (err) {
    // console.log(err);
  }
};
