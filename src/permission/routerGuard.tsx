import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import renderRoutesMap from './renderRoutesMap'
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
        <div id="reactSeed">
            <Component />
            {renderRoutesMap(routes)}
        </div>
    )
  }
}
export default withRouter(RouterGuard as any);
