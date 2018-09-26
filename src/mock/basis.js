import Mock from 'mockjs'
const List1 = []
const List2 = []
const List3 = []
const count = 30
for (let i = 0; i < count; i++) {
  List1.push(Mock.mock({
    mock1: '@natural(1000,2000)', // 模块编号
    mock2: '@ctitle(6)', // 模块名称
    mock3: '@cparagraph()', // 模块说明
    mock4: '@natural(1, 100)', // 排序
    mock5: '@boolean', // 是否首页显示
    mock6: '@natural(0,1)' // 状态
  }))
  List2.push(Mock.mock({
    mock1: '@natural(1000,2000)', // 标签编号
    mock2: '@ctitle(6)', // 标签名称
    mock3: '@cparagraph()', // 标签说明
    mock4: '@natural(1, 100)', // 排序
    mock5: '@boolean', // 是否首页显示
    mock6: '@natural(0,1)' // 状态
  }))
  List3.push(Mock.mock({
    mock1: '@natural(1000,2000)', // 类编号
    mock2: '@ctitle(6)', // 父类名称
    mock3: '@ctitle(6)', // 子类名称
    mock4: '@natural(1000,2000)', // 类code
    mock5: '@natural(1, 100)', // 类别数值
    mock6: '@natural(1, 100)', // 排序
    mock7: '@natural(0,1)' // 状态
  }))
}

export default {
  getProModuleList: config => {
    const { name, status, page = 1, limit = 10 } = JSON.parse(config.body)
    const mockList = List1.filter(item => {
      if (name && item.mock2 !== name) return false
      if (status !== '' && item.mock6 !== Number(status)) return false
      return true
    })
    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
    return {
      code: 200,
      total: mockList.length,
      items: pageList
    }
  },
  getProModuleInfo: config => {
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
  updateProModule: config => {
    return {
      code: 200
    }
  },
  addProModule: config => {
    return {
      code: 200
    }
  },
  closeProModule: config => {
    return {
      code: 200
    }
  },
  getProLabelList: config => {
    const { name, status, page = 1, limit = 10 } = JSON.parse(config.body)
    const mockList = List2.filter(item => {
      if (name && item.mock2 !== name) return false
      if (status !== '' && item.mock6 !== Number(status)) return false
      return true
    })
    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
    return {
      code: 200,
      total: mockList.length,
      items: pageList
    }
  },
  getProLabelInfo: config => {
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
  updateProLabel: config => {
    return {
      code: 200
    }
  },
  addProLabel: config => {
    return {
      code: 200
    }
  },
  closeProLabel: config => {
    return {
      code: 200
    }
  },
  getSysSizeList: config => {
    const { fname, cname, status, page = 1, limit = 10 } = JSON.parse(config.body)
    const mockList = List3.filter(item => {
      if (fname && item.mock2 !== fname) return false
      if (cname && item.mock3 !== cname) return false
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
  getSysSizeInfo: config => {
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
  updateSysSize: config => {
    return {
      code: 200
    }
  },
  addSysSize: config => {
    return {
      code: 200
    }
  },
  closeSysSize: config => {
    return {
      code: 200
    }
  }
}
