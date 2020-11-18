import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import renderRoutesMap from './renderRoutesMap'
interface RouterGuardProps {
  history: { replace: any };
  authorization?: any;
  location: { pathname: string };
  Component: any,
  routes: [],
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
        <>
            <Component {...this.props}/>
            <div>2121</div>
            {renderRoutesMap(routes)}
        </>
    )
  }
}
export default withRouter(RouterGuard as any);
