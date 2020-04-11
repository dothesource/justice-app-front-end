import axios from 'axios'
import { currentUser } from './auth'

export const Api = axios.create({
  baseURL: 'http://localhost:3000/',
})

Api.interceptors.request.use(async (config) => {
  if (currentUser() && currentUser().authentication_token) {
    config.headers['X-User-Token'] = currentUser().authentication_token
    config.headers['X-User-Email'] = currentUser().email
  }
  return config
})
