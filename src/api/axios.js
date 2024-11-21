import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  params: {
    api_key: "c3f199fe9a0d3b8b7ccb5b5700521028",
    language: "ko-KR",
  },
});

export default instance;

export function changeBaseURL(url) {
  instance.defaults.baseURL = url;
}
