// path 路径  component： 组件 exact ：完全匹配, requiresAuth：是否权限路由
// 父节点 如果存在子节点，就不能完全匹配，很简单，如果去子节点是下面的/user/subUser这个路径，那么你在父级搞个完全匹配，去子界面是没效果的！因为两者路由路径不等！
import loadable from '@src/components/loadable' // 按需加载
// 路由配置表
export default [
    {
        path: '/',
        exact: false,
        requiresAuth: true,
        key: 'home-1',
        component: loadable(() => import('../viewPage/home')),
        routes: [
            {
                key: 'home-2',
                path: '/subInfo',
                requiresAuth: true,
                exact: true,
                component: loadable(() => import('../viewPage/subInfo')),
            }
        ]
    }
]
