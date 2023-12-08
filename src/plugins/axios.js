import axios from "axios";

axios.defaults.baseURL = "https://foreca-weather.p.rapidapi.com";
axios.interceptors.request.use((config) => {
  config.headers = {
    "X-RapidAPI-Key": "1a6d09e9aemsh1a117c325f5c666p127306jsn225091b76fdc",
    "X-RapidAPI-Host": "foreca-weather.p.rapidapi.com",
  };
  return config;
});
