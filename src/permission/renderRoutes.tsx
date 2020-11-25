import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

interface IP {
    accountModule?: any,
    routes: any,
    extraProps?: any,
    switchProps?: any
}

// 权限路由！拦截器
const renderRoutes = ({accountModule, routes, extraProps = {}, switchProps = {}}: IP) => {
    const authPath = '/login' // 登录页面的地址
    const homePath = '/' // 首页的地址
    return routes ?
        <Switch {...switchProps}>
            {routes.map((route: any, i: number) => (
                <Route
                    key={route.key || i}
                    path={route.path}
                    exact={route.exact}
                    strict={route.strict}
                    render={(props) => {
                        const { token } = accountModule
                        // 如果当前有token且是登录页面，那么就去首页
                        if (token && route.path === authPath) {
                          return <Redirect to={{ pathname: homePath }} />
                        } else if (!route.requiresAuth || token || route.path === authPath) {
                            // 如果当前不是权限路由，或者 存在token，或者当前就是登录页面。就直接返回当前页面的组件
                            return <route.component {...props} {...extraProps} route={route} />
                        }
                        // 否则将去到登录页面
                        return <Redirect to={{ pathname: authPath, state: { from: props.location } }} />
                    }}
                />
            ))}
        </Switch>
        :
        null
}
export default inject('accountModule')(observer(renderRoutes));
