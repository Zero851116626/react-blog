// 暂时没有拦截业务，这里放拦截器
import axios from 'axios'

axios.interceptors.request.use(config => {
  const token = window.localStorage.getItem('token')
  if (token) {
    config.headers = Object.assign(config.headers, {token: token})
  }
  return config
})

axios.interceptors.response.use(response => {
  return Promise.resolve(response.data); 
})