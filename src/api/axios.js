import axios from "axios";

console.debug(" >>>>>>>>> ", process.env.REACT_APP_PROJECT_ID);

const instance = axios.create({
  baseURL: `http://api.hellreve.world/project/${process.env.REACT_APP_PROJECT_ID}/`,
  params: {
    api_key: "c3f199fe9a0d3b8b7ccb5b5700521028",
    language: "ko-KR",
  },
});

export default instance;
