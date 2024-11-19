import axios from "axios";

const userApi = axios.create({
  baseURL: "https://acsass-backend-8kh9.onrender.com/api/users",
});

export default userApi;
