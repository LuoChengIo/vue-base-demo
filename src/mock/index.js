import Mock from 'mockjs'
import loginAPI from './login'
import merchantAPI from './merchant'
import clientAPI from './client'
import channelAPI from './channel'
import statisticsAPI from './statistics'
import activityAPI from './activity'
import basisAPI from './basis'
import systemAPI from './system'
// Mock.setup({
//   timeout: '350-600'
// })

// 登录相关
Mock.mock(/\/biuser\/login/, 'post', loginAPI.login)
Mock.mock(/\/login\/logout/, 'post', loginAPI.logout)
Mock.mock(/\/user\/info/, 'post', loginAPI.GetInfo)
Mock.mock(/\/user\/updateInfo/, 'post', loginAPI.updateInfo)
Mock.mock(/\/upload/, 'post', loginAPI.uploadAvatar)

// 商户管理
Mock.mock(/\/getMerList/, 'post', merchantAPI.getMerList)
Mock.mock(/\/closeMer/, 'post', merchantAPI.closeMer)
Mock.mock(/\/getMerInfo/, 'post', merchantAPI.getMerInfo)
Mock.mock(/\/updateMer/, 'post', merchantAPI.updateMer)
Mock.mock(/\/addMer/, 'post', merchantAPI.addMer)
Mock.mock(/\/getProList/, 'post', merchantAPI.getProList)
Mock.mock(/\/closePro/, 'post', merchantAPI.closePro)
Mock.mock(/\/getProInfo/, 'post', merchantAPI.getProInfo)
Mock.mock(/\/updatePro/, 'post', merchantAPI.updatePro)
Mock.mock(/\/addPro/, 'post', merchantAPI.addPro)
// 渠道管理
Mock.mock(/\/getRelList/, 'post', channelAPI.getRelList)
Mock.mock(/\/closeRel/, 'post', channelAPI.closeRel)
Mock.mock(/\/getRelInfo/, 'post', channelAPI.getRelInfo)
Mock.mock(/\/updateRel/, 'post', channelAPI.updateRel)
Mock.mock(/\/addRel/, 'post', channelAPI.addRel)
Mock.mock(/\/getDiverList/, 'post', channelAPI.getDiverList)
Mock.mock(/\/closeDiver/, 'post', channelAPI.closeDiver)
Mock.mock(/\/getDiverInfo/, 'post', channelAPI.getDiverInfo)
Mock.mock(/\/updateDiver/, 'post', channelAPI.updateDiver)
Mock.mock(/\/addDiver/, 'post', channelAPI.addDiver)

// 客户管理
Mock.mock(/\/getAppRegList/, 'post', clientAPI.getAppRegList)
Mock.mock(/\/getAppRegInfo/, 'post', clientAPI.getAppRegInfo)
//  统计管理
Mock.mock(/\/getUserAlyList/, 'post', statisticsAPI.getUserAlyList)

// 活动管理
Mock.mock(/\/getActList/, 'post', activityAPI.getActList)
Mock.mock(/\/closeAct/, 'post', activityAPI.closeAct)
Mock.mock(/\/getActInfo/, 'post', activityAPI.getActInfo)
Mock.mock(/\/updateAct/, 'post', activityAPI.updateAct)
Mock.mock(/\/addAct/, 'post', activityAPI.addAct)

// 基础数据管理
Mock.mock(/\/getProModuleList/, 'post', basisAPI.getProModuleList)
Mock.mock(/\/closeProModule/, 'post', basisAPI.closeProModule)
Mock.mock(/\/getProModuleInfo/, 'post', basisAPI.getProModuleInfo)
Mock.mock(/\/updateProModule/, 'post', basisAPI.updateProModule)
Mock.mock(/\/addProModule/, 'post', basisAPI.addProModule)
Mock.mock(/\/getProLabelList/, 'post', basisAPI.getProLabelList)
Mock.mock(/\/closeProLabel/, 'post', basisAPI.closeProLabel)
Mock.mock(/\/getProLabelInfo/, 'post', basisAPI.getProLabelInfo)
Mock.mock(/\/updateProLabel/, 'post', basisAPI.updateProLabel)
Mock.mock(/\/addProLabel/, 'post', basisAPI.addProLabel)
Mock.mock(/\/getSysSizeList/, 'post', basisAPI.getSysSizeList)
Mock.mock(/\/closeSysSize/, 'post', basisAPI.closeSysSize)
Mock.mock(/\/getSysSizeInfo/, 'post', basisAPI.getSysSizeInfo)
Mock.mock(/\/updateSysSize/, 'post', basisAPI.updateSysSize)
Mock.mock(/\/addSysSize/, 'post', basisAPI.addSysSize)

// 系统设置管理
Mock.mock(/\/getMenuList/, 'post', systemAPI.getMenuList)
Mock.mock(/\/closeMenu/, 'post', systemAPI.closeMenu)
Mock.mock(/\/getMenuInfo/, 'post', systemAPI.getMenuInfo)
Mock.mock(/\/updateMenu/, 'post', systemAPI.updateMenu)
Mock.mock(/\/addMenu/, 'post', systemAPI.addMenu)
Mock.mock(/\/getUserList/, 'post', systemAPI.getUserList)
Mock.mock(/\/closeUser/, 'post', systemAPI.closeUser)
Mock.mock(/\/getUserInfo/, 'post', systemAPI.getUserInfo)
Mock.mock(/\/updateUser/, 'post', systemAPI.updateUser)
Mock.mock(/\/addUser/, 'post', systemAPI.addUser)
Mock.mock(/\/getPartList/, 'post', systemAPI.getPartList)
Mock.mock(/\/closePart/, 'post', systemAPI.closePart)
Mock.mock(/\/getPartInfo/, 'post', systemAPI.getPartInfo)
Mock.mock(/\/updatePart/, 'post', systemAPI.updatePart)
Mock.mock(/\/addPart/, 'post', systemAPI.addPart)

export default Mock
