import axios from "axios";

const Axios = () => {
  axios.defaults.headers = {
    "Content-Type": "application/json",

    Authorization: "Bearer " + sessionStorage.getItem("token"),
  };
  return axios;
};

export default Axios;
