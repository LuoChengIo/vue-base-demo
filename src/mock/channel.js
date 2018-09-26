import Mock from 'mockjs'
const List = []
const Listw = []
const count = 30
for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    mock1: '@natural(1000,2000)', // 发布渠道编号
    mock2: '@ctitle(6)', // 发布渠道名称
    mock3: '@url()', // 发布渠道URL
    'mock4|1': ['h5', '原生app'], // 发布渠道类型
    mock5: '@cparagraph()', // 发布渠道备注
    mock6: '@natural(0,1)' // 状态
  }))
  Listw.push(Mock.mock({
    mock1: '@natural(1000,2000)', // 导流渠道编号
    mock2: '@ctitle(6)', // 导流渠道名称
    mock3: '@url()', // 导流渠道URL
    'mock4|1': ['h5', '原生app'], // 导流渠道类型
    mock5: '@cparagraph()', // 导流渠道备注
    mock6: '@natural(0,1)' // 状态
  }))
}

export default {
  getRelList: config => {
    const { relNo, relName, relType, status, page = 1, limit = 10 } = JSON.parse(config.body)
    const mockList = List.filter(item => {
      if (relNo && item.mock1 !== relNo) return false
      if (relType && item.mock4 !== relType) return false
      if (relName && item.mock2 !== relName) return false
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
  getRelInfo: config => {
    const { relNo } = JSON.parse(config.body)
    const mockList = List.filter(item => {
      return item.mock1 === Number(relNo)
    })
    let obj = {}
    if (mockList.length) {
      obj = mockList[0]
    }
    obj.relChan = [0, 1]
    obj.addName = Mock.Random.first()
    obj.updateName = Mock.Random.first()
    obj.addTime = Mock.Random.date('T')
    obj.updateTime = Mock.Random.date('T')
    return {
      code: 200,
      data: obj
    }
  },
  updateRel: config => {
    return {
      code: 200
    }
  },
  addRel: config => {
    return {
      code: 200
    }
  },
  closeRel: config => {
    return {
      code: 200
    }
  },
  getDiverList: config => {
    const { diverNo, diverName, diverType, status, page = 1, limit = 10 } = JSON.parse(config.body)
    const mockList = Listw.filter(item => {
      if (diverNo && item.mock1 !== diverNo) return false
      if (diverType && item.mock4 !== diverType) return false
      if (diverName && item.mock2 !== diverName) return false
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
  getDiverInfo: config => {
    const { diverNo } = JSON.parse(config.body)
    const mockList = Listw.filter(item => {
      return item.mock1 === Number(diverNo)
    })
    let obj = {}
    if (mockList.length) {
      obj = mockList[0]
    }
    obj.diverChan = [0, 1]
    obj.addName = Mock.Random.first()
    obj.updateName = Mock.Random.first()
    obj.addTime = Mock.Random.date('T')
    obj.updateTime = Mock.Random.date('T')
    return {
      code: 200,
      data: obj
    }
  },
  updateDiver: config => {
    return {
      code: 200
    }
  },
  addDiver: config => {
    return {
      code: 200
    }
  },
  closeDiver: config => {
    return {
      code: 200
    }
  }

}

