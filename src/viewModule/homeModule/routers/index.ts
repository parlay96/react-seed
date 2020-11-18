// path 路径  component： 组件 exact ：完全匹配, keepAiveName:  必须唯一
import loadable from '../../../components/loadable' // 按需加载
// 路由配置表
export default [
  {
    path: "/",
    exact: true,
    keepAiveName: 'home',
    component: loadable(() => import("../viewPage/home")),
    routes: [
      {
        path: "/subInfo",
        exact: true,
        component: loadable(() => import("../viewPage/subInfo")),
      }
    ]
  }
];
