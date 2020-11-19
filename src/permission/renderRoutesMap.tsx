import RouterGuard from './routerGuard'
import React from 'react'
import {Route} from 'react-router-dom'

// 没有使用这样的方式了
export default (routes: []) => (
  routes.map((route: any, index: number) => {
    return (
      <Route key={index}
             path={route.path}
             exact={route.exact}
             render={props => (
               <RouterGuard {...route} {...props} />
             )}
      />
    )
  })
)
