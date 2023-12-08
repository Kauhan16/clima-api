import axios from "axios";
export default class ForecaAPI {
  async LocationSearch(query) {
    try {
      const { data } = await axios.get(`/location/search/${query}`);
      return Promise.resolve(data.locations);
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    }
  }

  async LocationInfo(id) {
    try {
      const { data } = await axios.get(`/location/${id}`);
      return Promise.resolve(data);
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    }
  }

  async CurrentWeather(id) {
    try {
      const { data } = await axios.get(`/current/${id}`);
      return Promise.resolve(data);
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    }
  }

  // async ShowHourly(id) {
  //   try {
  //     const { data } = await axios.get(`/hour/${id}`);
  //     return Promise.resolve(data);
  //   } catch (e) {
  //     console.log(e);
  //     return Promise.reject(e);
  //   }
  // }

  // async NowCast(id) {
  //   try {
  //     const { data } = await axios.get(`/15minutely/${id}`);
  //     return Promise.resolve(data);
  //   } catch (e) {
  //     console.log(e);
  //     return Promise.reject(e);
  //   }
  // }

  // async Daily(id) {
  //   try {
  //     const { data } = await axios.get(`/daily/${id}`);
  //     return Promise.resolve(data);
  //   } catch (e) {
  //     console.log(e);
  //     return Promise.reject(e);
  //   }
  // }
}
