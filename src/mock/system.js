import Mock from 'mockjs'
const List1 = []
const List2 = []
const List3 = []
const count = 30
for (let i = 0; i < count; i++) {
  List1.push(Mock.mock({
    mock1: '@natural(1000,2000)', // 菜单编号
    mock2: '@ctitle(6)', // 菜单名称
    mock3: '@ctitle(6)', // 父级菜单名称
    mock4: '@ctitle(6)', // 子集菜单名称
    mock5: '@url', // 菜单url
    mock6: '@natural(1, 100)', // 排序
    mock7: '@natural(0,1)' // 状态
  }))
  List2.push(Mock.mock({
    mock1: '@natural(1000,2000)', // 用户编号
    mock2: '@ctitle(6)', // 用户名
    mock3: '@ctitle(6)', // 用户角色
    mock4: '@ctitle(6)', // 用户类型
    mock5: '@cname', // 用户姓名
    mock6: '@cname', // 用户昵称
    'mock7|1': ['13713661894', '13713661812'], //  手机号码
    mock8: '@date(T)', // 创建时间
    mock9: '@natural(0,1)', // 状态
    password: '@natural(0,1)' // 密码
  }))
  List3.push(Mock.mock({
    mock1: '@natural(1000,2000)', // 角色编号
    mock2: '@ctitle(6)', // 角色名
    mock3: '@natural(0,1)', // 状态
    mock4: '系统管理，渠道管理，产品管理，用户管理' // 角色权限
  }))
}

export default {
  getMenuList: config => {
    const { name, status, page = 1, limit = 10 } = JSON.parse(config.body)
    const mockList = List1.filter(item => {
      if (name && item.mock2 !== name) return false
      if (status !== '' && item.mock7 !== Number(status)) return false
      return true
    })
    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
    return {
      code: 200,
      total: mockList.length,
      items: pageList
    }
  },
  getMenuInfo: config => {
    const { iNo } = JSON.parse(config.body)
    const mockList = List1.filter(item => {
      return item.mock1 === Number(iNo)
    })
    let obj = {}
    if (mockList.length) {
      obj = mockList[0]
    }
    obj.addName = Mock.Random.first()
    obj.updateName = Mock.Random.first()
    obj.addTime = Mock.Random.date('T')
    obj.updateTime = Mock.Random.date('T')
    return {
      code: 200,
      data: obj
    }
  },
  updateMenu: config => {
    return {
      code: 200
    }
  },
  addMenu: config => {
    return {
      code: 200
    }
  },
  closeMenu: config => {
    return {
      code: 200
    }
  },
  getUserList: config => {
    const { name, status, page = 1, limit = 10 } = JSON.parse(config.body)
    const mockList = List2.filter(item => {
      if (name && item.mock2 !== name) return false
      if (status !== '' && item.mock9 !== Number(status)) return false
      return true
    })
    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
    return {
      code: 200,
      total: mockList.length,
      items: pageList
    }
  },
  getUserInfo: config => {
    const { iNo } = JSON.parse(config.body)
    const mockList = List2.filter(item => {
      return item.mock1 === Number(iNo)
    })
    let obj = {}
    if (mockList.length) {
      obj = mockList[0]
    }
    obj.addName = Mock.Random.first()
    obj.updateName = Mock.Random.first()
    obj.addTime = Mock.Random.date('T')
    obj.updateTime = Mock.Random.date('T')
    return {
      code: 200,
      data: obj
    }
  },
  updateUser: config => {
    return {
      code: 200
    }
  },
  addUser: config => {
    return {
      code: 200
    }
  },
  closeUser: config => {
    return {
      code: 200
    }
  },
  getPartList: config => {
    const { name, status, page = 1, limit = 10 } = JSON.parse(config.body)
    const mockList = List3.filter(item => {
      if (name && item.mock2 !== name) return false
      if (status !== '' && item.mock3 !== Number(status)) return false
      return true
    })
    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
    return {
      code: 200,
      total: mockList.length,
      items: pageList
    }
  },
  getPartInfo: config => {
    const { iNo } = JSON.parse(config.body)
    const mockList = List3.filter(item => {
      return item.mock1 === Number(iNo)
    })
    let obj = {}
    if (mockList.length) {
      obj = mockList[0]
    }
    obj.addName = Mock.Random.first()
    obj.updateName = Mock.Random.first()
    obj.addTime = Mock.Random.date('T')
    obj.updateTime = Mock.Random.date('T')
    return {
      code: 200,
      data: obj
    }
  },
  updatePart: config => {
    return {
      code: 200
    }
  },
  addPart: config => {
    return {
      code: 200
    }
  },
  closePart: config => {
    return {
      code: 200
    }
  }
}
