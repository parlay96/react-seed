/*
 * @Date: 2022-06-06 15:40:50
 * @Description: 菜单数据中心
 */
/** 页面最顶部的tab导航配置 */
const navList: {name: string, url: string, matchUrl: string}[] = [
  // matchUrl匹配地址，进行高亮。主要为了匹配子路由
  { name: '首页', url: '/', matchUrl: '/' },
  { name: '业务', url: '/business', matchUrl: '/business'}
]

// 业务tab menu菜单配置
const menuList = [
  { label: '工程经济', key: 'sub-1',
    children: [{
      label: '项目', key: '/business',
    }, {
      label: '合同', key: '/business/contract',
    }]
  }
]

export {
  menuList,
  navList
}
