import axios from "axios";

const retryWrapper = (axios, options) => {
  const max_time = options.retry_time;
  let counter = 0;
  axios.interceptors.response.use(null, (error) => {
    const config = error.config;
    if (counter < max_time && error.response && error.response.status >= 500) {
      counter++;
      return new Promise((resolve) => {
        resolve(axios(config));
      });
    }
    return Promise.reject(error);
  });
  return axios;
};

retryWrapper(axios, { retry_time: 3, retry_status_code: 500 });

export const retryAxios = axios;
