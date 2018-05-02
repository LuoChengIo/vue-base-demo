import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/api/v1/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}
export function getInfo(token) {
  return request({
    url: '/api/v1/info',
    method: 'post',
    data: { token }
  })
}

export function logout() {
  return request({
    url: '/api/v1/user/logout',
    method: 'post'
  })
}
