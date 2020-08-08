import axios from 'axios';

const api = axios.create({
  baseURL: 'http://changeThis:3333', //change this with your metro bundle address
});

export default api;