import RouterGuard from './routerGuard'
import React from 'react'
import {Route} from "react-router-dom";
export default (routes: []) => (
  routes.map((route: any, index: number) => {
    console.log(route)
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
