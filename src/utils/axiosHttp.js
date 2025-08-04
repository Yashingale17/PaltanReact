import axios from "axios"

const axiosHttp = axios.create({
  baseURL: "https://appy.trycatchtech.com/v3/puneri_paltan/player_list",
  headers: {
    'Content-Type': 'application/json', 
  }
})

axiosHttp.interceptors.request.use((config) => {
  return config
} , 
(error) => {
  return Promise.reject(error)
})


axiosHttp.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosHttp;