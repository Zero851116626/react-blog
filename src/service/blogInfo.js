import axios from 'axios'
const baseURL = 'http://localhost:9999/api/user'
export default {
  // 首页获取博主信息
  getMasterInfo(){
    return axios.get(`${baseURL}/masterinfo/unlog`)
  }
}