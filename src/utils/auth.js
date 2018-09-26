import Cookies from 'js-cookie'
import store from '@/store'
const TokenKey = 'Admin-Token'

export function getUserInfo() {
  return Cookies.getJSON('UserInfo')
}

export function setUserInfo(UserInfo) {
  return Cookies.set('UserInfo', UserInfo)
}

export function removeUserInfo() {
  return Cookies.remove('UserInfo')
}

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function checkAuth(name) { // 检查权限
  // const roles = store.getters.roles
  // const index = roles.indexOf(name)
  // return index !== -1
  const isSuper = store.getters.userinfo.isSuper // 是否超级管理员
  return isSuper
}
