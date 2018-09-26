import request from '@/utils/request'

export function login(data) {
  return request({ // 登录接口
    url: '/biuser/login',
    method: 'post',
    data
  })
}
export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'post',
    data: { token }
  })
}
export function updateInfo(data) {
  return request({
    url: '/biuser/changePassword',
    method: 'post',
    data
  })
}
export function logout() {
  return request({
    url: '/api/v1/user/logout',
    method: 'post'
  })
}
