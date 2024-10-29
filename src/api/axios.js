import axios from "axios";

const instance = axios.create({
  baseURL : "https://api.hellreve.world/project/<project_id>/",
  params : {
    api_key : "c3f199fe9a0d3b8b7ccb5b5700521028",
    language : "ko-KR"
  }    
})

export default instance;