import { Api } from './Api'

const tokensPathTo = {
  save: (options) => {
    return Api.request({
      url: '/tokens.json',
      method: 'post',
      data: options.data,
    })
  },
}

export default tokensPathTo
