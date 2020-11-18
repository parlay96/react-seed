import React, { Component } from 'react'
import {NavLink} from "react-router-dom";
import renderRoutes from "../../../permission/renderRoutes";

interface IP {history: any, route: any}

export default class user extends Component<IP> {
  constructor(props: IP, context: any) {
    super(props)
    this.state = {}
  }
    openSub = () => {
        this.props.history.push('/user/subUser')
    }
  render() {
    const {route} = this.props
    return (
      <div className='sty1'>
          <p>我是用户页面</p>
          <NavLink to="/">点击去首页页面</NavLink>
          <input/>
          <br/>
          <button onClick={this.openSub}>点我展开我的子页面</button>
          {renderRoutes(route.routes)}
      </div>
    )
  }
}

