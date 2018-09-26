import Mock from 'mockjs'
const List = []
const count = 30
for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    mock1: '@first', // 用户名
    mock2: '@ctitle(6)', // 导流渠道名称
    mock3: '@ctitle(6)', // 导流渠道类型
    mock4: '@ctitle(6)', // 发布渠道名称
    'mock5|1': ['13713661894', '13713661812'],
    mock6: '@date(T)', // 申请时间
    mock7: '@ctitle(7)', // 商户名称
    mock8: '@ctitle(8)' // 产品名称
  }))
}
export default {
  getUserAlyList: config => {
    const { mock1, mock7, mock8, page = 1, limit = 10 } = JSON.parse(config.body)
    const mockList = List.filter(item => {
      if (mock1 && item.mock1 !== mock1) return false
      if (mock7 && item.mock7 !== mock7) return false
      if (mock8 && item.mock8 !== mock8) return false
      return true
    })
    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
    return {
      code: 200,
      total: mockList.length,
      items: pageList
    }
  }
}
