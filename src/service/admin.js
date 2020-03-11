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
  },
  createArticle(params){
    return axios.post(`${baseUrl}/article`, {
      title: params.title,
      content: params.content,
      setTop: params.setTop,
      tagTypeId: params.tagTypeId|| ''
    })
  },
  getTagList(){
    return axios.get(`${baseUrl}/article/taglist`)
  },
  getArticleList(){
    return axios.get(`${baseUrl}/article/list`)
  },
  createNewTag(name, color){
    return axios.post(`${baseUrl}/article/newtag`, {
      tagName: name,
      color: color
    })
  }
}