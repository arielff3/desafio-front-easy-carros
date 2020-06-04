import axios from 'axios';

const api = () => {
  return axios.create({
    baseURL: 'http://localhost:8181',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default api();
