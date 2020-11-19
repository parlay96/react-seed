import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

// 权限路由！拦截器
const renderRoutes = (routes: any, authPath = '/login', extraProps = {}, switchProps = {}, authed?: any) => routes ? (
    <Switch {...switchProps}>
        {routes.map((route: any, i: number) => (
            <Route
                key={route.key || i}
                path={route.path}
                exact={route.exact}
                strict={route.strict}
                render={(props) => {
                    if (!route.requiresAuth || authed || route.path === authPath) {
                        return <route.component {...props} {...extraProps} route={route} />
                    }
                    return <Redirect to={{ pathname: authPath, state: { from: props.location } }} />
                }}
           />
         ))}
    </Switch>
  ) : null

export default renderRoutes
