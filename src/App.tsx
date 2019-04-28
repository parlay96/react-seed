import React, { Component } from 'react'
import {Switch} from "react-router-dom";
import {inject, observer} from 'mobx-react'
import "antd/dist/antd.css";
import './themes/defatult.scss';
import './themes/common.scss';
import renderRoutesMap from "./permission/renderRoutesMap";
import ProviderKeepAlive from "react-keep-alive/es/components/Provider";

interface AppProps { keepAliveData?: any; router: any; }
@inject(({ storesIndex }) => ({
  keepAliveData: storesIndex.keepAliveData
}))
@observer
export default class App extends Component<AppProps, {}> {
  constructor(props: any) {
    super(props)
    this.state = {
    }
  }
  render () {
    const { keepAliveData, router } = this.props;
    return (
      <ProviderKeepAlive include={keepAliveData || []}>
        <Switch>
          {renderRoutesMap(router)}
        </Switch>
      </ProviderKeepAlive>
    )
  }
}
