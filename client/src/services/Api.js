import axios from "axios";

//CONNECT to SERVER
export default () => {
  return axios.create({
    //baseURL: 'http://localhost:3000'
    baseURL: "/"
  });
};
