import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import renderRoutesMap from './renderRoutesMap'
import KeepAlive from "react-keep-alive/es/components/KeepAlive";
interface RouterGuardProps {
  history: any;
  authorization?: any;
  location: any;
  Component: any,
  routes: any,
  keepAiveName: any
}
/*
   权限设置 路由拦截
 */
class RouterGuard extends Component<RouterGuardProps, any> {
  constructor(props: any) {
    super(props)
  }
  componentWillMount() {
    const {history: {replace}, authorization, location} = this.props
    if (authorization) {
      replace('./login')
    } else if (location.pathname === '/') {
      replace('./')
    }
  }
  render() {
    const {Component, routes = [], keepAiveName } = this.props
    return (
      <KeepAlive name={ keepAiveName } _container={ keepAiveName }>
        <div id="reactSeed">
          <Component />
          {renderRoutesMap(routes)}
        </div>
      </KeepAlive>
    )
  }
}
export default withRouter(RouterGuard as any);
