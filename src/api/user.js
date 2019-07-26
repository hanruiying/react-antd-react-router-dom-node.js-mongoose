import request from '../utils/request'

export function user() {
  return request({
    url: '/user',
    method: 'get'
  })
}

export function role() {
  return request({
    url: '/role',
    method: 'get'
  })
}

export function roleAdd(data) {
  return request({
    url: '/role/add',
    method: 'post',
    data
  })
}

export function roleUpdate(data) {
  return request({
    url: '/role/update',
    method: 'post',
    data
  })
}