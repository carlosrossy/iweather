import axios from "axios";

const api = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5`,
  params: {
    lang: 'pt_br',
    units: 'metric',
  },
});

export default api;
