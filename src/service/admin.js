import axios from 'axios'

const baseUrl = 'http://localhost:9999/api'

export default {
  createRootUser(nickname, userId, password, phone){
    return axios.post(`${baseUrl}/user/createroot`, {
      nickname,
      userId,
      password,
      phone
    })
  },
  userLogin(userName, password){
    return axios.post(`${baseUrl}/user/login`,{
      username: userName,
      password: password
    })
  }
}