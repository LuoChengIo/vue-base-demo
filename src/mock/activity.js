import Mock from 'mockjs'
const List = []
const count = 30
for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    mock1: '@natural(1000,2000)', // 活动编号
    mock2: '@ctitle(6)', // 产品名称
    mock3: '@ctitle(6)', // 活动名称
    mock4: '@ctitle(4)', // 活动类型
    mock5: '@url', // 活动url
    mock6: '@dataImage("200x100", "活动图片")', // 活动图片
    mock7: '@natural(1, 100)', // 排序
    mock8: '@natural(0,1)' // 状态
  }))
}

export default {
  getActList: config => {
    const { mock3, mock4, status, page = 1, limit = 10 } = JSON.parse(config.body)
    const mockList = List.filter(item => {
      if (mock3 && item.mock3 !== mock3) return false
      if (mock4 && item.mock4 !== mock4) return false
      if (status !== '' && item.mock8 !== Number(status)) return false
      return true
    })
    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
    return {
      code: 200,
      total: mockList.length,
      items: pageList
    }
  },
  getActInfo: config => {
    const { actNo } = JSON.parse(config.body)
    const mockList = List.filter(item => {
      return item.mock1 === Number(actNo)
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
  updateAct: config => {
    return {
      code: 200
    }
  },
  addAct: config => {
    return {
      code: 200
    }
  },
  closeAct: config => {
    return {
      code: 200
    }
  }
}
