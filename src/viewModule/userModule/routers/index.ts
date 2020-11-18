// path 路径  component： 组件 exact ：完全匹配, keepAiveName:  必须唯一
import loadable from '../../../components/loadable'
// 路由配置表
export default [
  {
    path: "/user",
    exact: true,
    component: loadable(() => import("../viewPage/user")),
    routes: [
      {
        path: "/user/subUser",
        exact: true,
        component: loadable(() => import("../viewPage/subUser")),
      }
    ]
  }
];
