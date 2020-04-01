import { Api } from './Api'

const inputsPathTo = {
  get: (options) => {
    return Api.request({
      url: '/inputs/' + options.id + '.json',
      method: 'get',
      params: options.params,
    })
  },
  query: () => {
    return Api.request({
      url: '/inputs.json',
      method: 'get',
    })
  },
}

export default inputsPathTo
