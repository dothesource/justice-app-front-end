import axios from 'axios'
import { currentUser } from './auth'

export const Api = axios.create({
  baseURL: 'http://localhost:3000/',
})

Api.interceptors.request.use(async (config) => {
  var token = ''
  if (currentUser()) {
    token = currentUser().token
  }
  if (token) {
    config.headers['X-User-Token'] = token
    config.headers['X-User-Email'] = currentUser().user.email
  }
  return config
})
