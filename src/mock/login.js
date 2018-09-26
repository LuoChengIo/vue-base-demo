// import { param2Obj } from '@/utils'

const userMap = {
  admin: {
    'code': '200',
    'data': {
      'captcha': '',
      'accessToken': 12321312,
      'createTime': '2018-09-18 11:53:44',
      'id': 1,
      'isSuper': true,
      'lastLoginIp': '172.31.1.2',
      'lastLoginTime': '2018-09-18 11:53:44',
      'password': '',
      'realName': '易小群',
      'remark': '超管',
      'uid': '',
      'userName': 'admin'
    },
    'message': '',
    'desc': ''
  },
  editor: {
    code: 200,
    roles: ['editor'],
    accessToken: 'editor',
    introduction: '我是编辑',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

export default {
  login: config => {
    const { userName } = JSON.parse(config.body)
    return userMap[userName]
  },
  GetInfo: config => {
    const { token } = JSON.parse(config.body)
    if (userMap[token]) {
      return userMap[token]
    } else {
      return false
    }
  },
  updateInfo: config => {
    return {
      code: 200
    }
  },
  uploadAvatar: config => {
    return {
      code: 200
    }
  },
  logout: () => 'success'
}
