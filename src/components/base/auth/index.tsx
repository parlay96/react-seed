/*
 * @Date: 2022-05-30 11:42:08
  * @Description: 路由拦截
 */
import React, { useState, useEffect } from "react"
import { request, TOKEN, USERINFO} from '@/utils'
import {setStore } from '@/utils'
import { actions, dispatch, getState } from "@/store"

interface RequiredAuthProps {
  children: React.ReactNode
}

export default function RequiredAuth (props: RequiredAuthProps) {
  // 标识
  const [ refresh, setRefresh ] = useState(false)
  // 登录状态
  const isLogin = getState().user.isLogin
  const sign = async () => {
    if (true) {
      // 设置登录信息
      setStore(USERINFO, {name: '张三'})
      setStore(TOKEN, 124)
      // 设置登录状态
      dispatch(actions.userActions.setState({isLogin: true}))
      // 刷新页面
      setRefresh(true)
    }
  }
  useEffect(() => {
    if (!isLogin) {
      sign()
    }
  }, [])

  if (isLogin) {
    return <>{ props.children }</>
  } else {
    return <>正在登录, 请稍等...</>
  }
}
