import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import renderRoutesMap from './renderRoutesMap'
interface RouterGuardProps {
  history: { replace: any }
  authorization?: any
  location: { pathname: string }
  Component: any,
  routes: [],
  keepAiveName: any
}
/*
   权限设置 路由拦截 没有使用这样的方式了，在新种子中，更加结合router官方做法
 */
class RouterGuard extends Component<RouterGuardProps, any> {
  constructor(props: any) {
    super(props)
  }
  componentDidMount() {
    const {history: {replace}, authorization, location} = this.props
    if (authorization) {
      replace('./login')
    } else if (location.pathname === '/') {
      replace('./')
    }
  }
  render() {
    const {Component, routes = [] } = this.props
    return (
        <>
            <Component {...this.props}/>
            {renderRoutesMap(routes)}
        </>
    )
  }
}
export default withRouter(RouterGuard as any)
