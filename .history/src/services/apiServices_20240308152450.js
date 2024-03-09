import axios from "../utils/axiosCustomize";

const postCreateNewUser = (email, password, username, role, image) => {
  //submit
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.post(`api/v1/participant`, data);
};

const getAllUsers = () => {
  console.log(
    return axios.get(`api/v1/participant/all`);
  );
};

export { postCreateNewUser, getAllUsers };
