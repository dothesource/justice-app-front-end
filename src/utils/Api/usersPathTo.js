import { Api } from './Api'

const usersPathTo = {
  get: (options) => {
    return Api.request({
      url: '/users/' + options.id + '.json',
      method: 'get',
      params: options.params
    })
  }
}


export default usersPathTo

// export const get = (options) => {
//   return Api.request({
//     url: '/users/' + options.id,
//     method:'get',
//     params: options.params
//   })
// }
//
// export const get2 = (options) => {
//   return Api.get('/users/' + options.id)
// }
