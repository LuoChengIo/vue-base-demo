import Mock from 'mockjs'
const List = []
const count = 30
for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    mock1: '@natural(1000,2000)', // 用户编号
    mock2: '@ctitle(6)', // 导流渠道名称
    mock3: '@ctitle(6)', // 发布渠道名称
    'mock4|1': ['13713661894', '13713661812'],
    mock5: '@date(T)', // 注册时间
    mock6: '@cname', // 昵称
    mock7: '@cparagraph()', // 备注
    mock8: '@natural(0,1)', // 状态
    mock9: '@first', // 用户名
    mock10: '@dataImage("100x100", "头像")' // 头像
  }))
}
export default {
  getAppRegList: config => {
    const { regNo, regName, page = 1, limit = 10 } = JSON.parse(config.body)
    const mockList = List.filter(item => {
      if (regNo && item.mock1 !== Number(regNo)) return false
      if (regName && item.mock6 !== regName) return false
      return true
    })
    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
    return {
      code: 200,
      total: mockList.length,
      items: pageList
    }
  },
  getAppRegInfo: config => {
    const { regNo } = JSON.parse(config.body)
    const mockList = List.filter(item => {
      return item.mock1 === Number(regNo)
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
  }
}
