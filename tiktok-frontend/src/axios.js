import axios from "axios";

const instance = axios.create({
  baseURL: "https://tik-tok-clone-mern.herokuapp.com",
});

export default instance;
