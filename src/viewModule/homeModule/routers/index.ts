// path 路径  Component： 组件 exact ：完全匹配, keepAiveName:  必须唯一
import loadable from '../../../components/loadable' // 按需加载
// 路由配置表
export default [
  {
    path: "/",
    exact: true,
    keepAiveName: 'home',
    Component: loadable(() => import("../viewPage/home"))
  }
];
