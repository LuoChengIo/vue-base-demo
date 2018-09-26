import Mock from 'mockjs'
const List = []
const proList = []
const count = 30
for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    mock1: '@natural(1000,2000)', // 商户编号
    mock2: '@ctitle(6)', // 商户名称
    'mock3|1': ['13713661894', '13713661812'], // 联系方式
    mock4: '@integer(1000, 10000)', // 获客单价
    mock5: '@natural(0,1)', // 状态
    mock6: '@county(true)', // 公司地址
    mock7: '@integer(1000000, 10000000)', // 营业执照号码
    mock8: '@dataImage("200x100", "资质照片")', // 资质照片
    mock9: '@date(T)', // 协议开始时间
    mock10: '@date(T)', // 协议结束时间
    'mock11|1': ['072121321313', '072321321313', '072421321613', '072421321313'], // 客服电话
    mock12: '@dataImage("100x100", "公司logo")', // 公司logo
    mock13: '@date(T)', // 服务开始时间
    mock14: '@date(T)' // 服务结束时间
  }))
  proList.push(Mock.mock({
    mock1: '@natural(1000,2000)', // 产品编号
    mock2: '@ctitle(6)', // 产品名称
    mock3: '@ctitle(6)', // 商户名称
    mock4: '@url()', // 定制url
    mock5: '@url()', // 默认url
    'mock6|1': [['身份证', '人脸识别'], ['热门', '爆款']], // 产品标签
    mock7: '@ctitle(4)', // 产品类型
    mock8: '@dataImage("200x100", "产品logo")', // 产品logo
    mock9: '@natural(0,1)' // 状态
  }))
}

export default {
  getMerList: config => {
    const { merNo, name, status, page = 1, limit = 10 } = JSON.parse(config.body)
    const mockList = List.filter(item => {
      if (merNo && item.mock1 !== Number(merNo)) return false
      if (name && item.mock2 !== name) return false
      if (status !== '' && item.mock5 !== Number(status)) return false
      return true
    })
    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
    return {
      code: 200,
      total: mockList.length,
      items: pageList
    }
  },
  getMerInfo: config => {
    const { merNo } = JSON.parse(config.body)
    const mockList = List.filter(item => {
      return item.mock1 === Number(merNo)
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
  updateMer: config => {
    return {
      code: 200
    }
  },
  addMer: config => {
    return {
      code: 200
    }
  },
  closeMer: config => {
    return {
      code: 200
    }
  },
  getProList: config => {
    const { proNo, merName, proName, status, page = 1, limit = 10 } = JSON.parse(config.body)
    const mockList = proList.filter(item => {
      if (proNo && item.mock1 !== proNo) return false
      if (proName && item.mock2 !== proName) return false
      if (merName && item.mock3 !== merName) return false
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
  getProInfo: config => {
    const obj = Mock.mock({
      mock1: '@ctitle(6)', // 产品名称
      mock2: '@natural(0,1)', // 状态
      mock3: '@dataImage("100x100", "产品logo")', // 产品logo
      mock4: '@integer(1000, 10000)', // 序号
      mock5: '@url()', // 定制url
      mock6: '@natural(0,1)', // 商户
      mock7: '@integer(100, 1000)', // 初始申请成功数
      mock8: [0], // 发布渠道
      mock9: '@integer(1000, 10000)', // 额度
      mock10: '@float(0, 0, 3, 5)', // 利率
      mock11: '@natural(0,1)', // 产品类型
      mock12: '@integer(10, 100)', // 还款期限
      mock13: '@cparagraph()', // 产品说明
      mock14: '@cparagraph()', // 申请条件
      mock15: '@cparagraph()', // 所需材料
      mock16: '@cparagraph()', // 申请要点
      mock17: [0], // 申请要点
      mock18: [0], // 申请要点
      addName: '@first()',
      updateName: '@first()',
      addTime: '@date(T)',
      updateTime: '@date(T)'
    })
    return {
      code: 200,
      data: obj
    }
  },
  updatePro: config => {
    return {
      code: 200
    }
  },
  addPro: config => {
    return {
      code: 200
    }
  },
  closePro: config => {
    return {
      code: 200
    }
  }

}
