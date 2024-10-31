import axios from "axios";

const instance = axios.create({
  baseURL : "http://api.hellreve.world/project/og4j9y2pkw5n63p7/",
  params : {
    api_key : "c3f199fe9a0d3b8b7ccb5b5700521028",
    language : "ko-KR"
  }    
})

export default instance;