import React, { Component } from 'react'
import {NavLink} from "react-router-dom";

export default class user extends Component {
  constructor(props: any, context: any) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className='sty1'>
        我是用户
        <NavLink to="/">点击去首页页面</NavLink>
        <input/>
      </div>
    )
  }
}

