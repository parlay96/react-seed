/*
 * @Author: penglei
 * @Date: 2022-05-26 00:09:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-27 10:48:25
 * @Description:
 */

import React, { Suspense } from 'react'
import { useRoutes } from "react-router-dom"
import { routes, REQUEST_URL } from '@/config'

export default function App (props) {
  const element = useRoutes(routes)
  return (
    <>
      {/* Suspense对于延迟加载组件，是必须的 */}
      <Suspense fallback="loading...">
        {element}
      </Suspense>
    </>
  )
}
