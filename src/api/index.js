import axios from 'axios'
import {params} from './config'

export function apigetDiscList () {
  return axios({
    method: 'get',
    url: '/api/json',
    params,
    timeout: 10000,
    responseType: 'json'
  })
    .then((response) => {
      // return new Promise(function (resolve) {
      //   resolve(response.data)
      // })
      return Promise.resolve(response.data)
    })
}
export function foo () {
  return 5
}
