import React, { Component } from 'react'
import {Switch} from "react-router-dom";
import {inject, observer} from 'mobx-react'
import "antd/dist/antd.css";
import './themes/defatult.scss';
import './themes/common.scss';
import renderRoutesMap from "./permission/renderRoutesMap";

interface AppProps { keepAliveData?: []; router: any; }
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
    const { router } = this.props;
    return (
        <Switch>
            {renderRoutesMap(router)}
        </Switch>
    )
  }
}
