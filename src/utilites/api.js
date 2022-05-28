import axios from "axios";

const instance = axios.create({
  baseURL: "https://alk-rn-todos.herokuapp.com/",
});

export default instance;
