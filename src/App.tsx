import React, { Component } from 'react'
import {inject, observer} from 'mobx-react'
import 'antd/dist/antd.css'
import './themes/defatult.scss'
import './themes/common.scss'
import renderRoutes from '@src/permission/renderRoutes'
// import { Route, Link, Switch } from 'react-router-dom'

interface AppProps { keepAliveData?: []; router: any }
@inject(({ storesIndex }) => ({
  keepAliveData: storesIndex.keepAliveData
}))
@observer
export default class App extends Component<AppProps> {
  constructor(props: AppProps) {
    super(props)
    this.state = {
    }
  }
  render () {
    const { router } = this.props
    return (
        <>
          {renderRoutes(router)}

          {/*下面属于写个路由的demo*/}

          {/*<Switch>*/}
          {/*  <Route path="/about">*/}
          {/*    <Link to="/">Home</Link>*/}
          {/*  </Route>*/}
          {/*  <Route path="/">*/}
          {/*    <Link to="/about">about</Link>*/}
          {/*  </Route>*/}
          {/*  /!*<Route path="/about" exact>*!/*/}
          {/*  /!*  <Link to="/">Home</Link>*!/*/}
          {/*  /!*</Route>*!/*/}
          {/*</Switch>*/}

          {/*下面属于写个路由嵌套的demo*/}

          {/*<Switch>*/}
          {/*  <Route path="/about" exact>*/}
          {/*    <span>about</span>*/}
          {/*  </Route>*/}
          {/*  <Route path="/users" exact>*/}
          {/*    <span>users</span>*/}
          {/*  </Route>*/}
          {/*  <Route path="/">*/}
          {/*    <div>*/}
          {/*      <span>Home</span>*/}
          {/*      <li>*/}
          {/*        <Link to="/home">Homesub</Link>*/}
          {/*      </li>*/}
          {/*      <li>*/}
          {/*        <Link to="/about">about</Link>*/}
          {/*      </li>*/}
          {/*      <Switch>*/}
          {/*        <Route path="/home" exact>*/}
          {/*          <span style={{color: 'red'}}>Homesub</span>*/}
          {/*        </Route>*/}
          {/*      </Switch>*/}
          {/*    </div>*/}
          {/*  </Route>*/}
          {/*</Switch>*/}
        </>
    )
  }
}
