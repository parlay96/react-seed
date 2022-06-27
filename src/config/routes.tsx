/*
 * @Date: 2022-06-01 19:19:53
 * @Description: 路由表
 */
import * as React from "react"
import type { RouteObject } from "react-router-dom"

import Layout from '@/layout'

const NoMatch = React.lazy(() => import('@/pages/404'))
/** 首页，工作台 */
const Workbench = React.lazy(() => import('@/pages/workbench'))

/** 业务模块布局 */
const BusinessLayout = React.lazy(() => import('@/pages/business/layout'))

/** 工程经济相关 */
/** 项目 */
const EngineeringProject = React.lazy(() => import('@/pages/business/engineering/project'))
/** 合同 */
const EngineeringContract = React.lazy(() => import('@/pages/business/engineering/contract'))

/** 路由表 */
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Workbench /> },
      // 业务
      {
        path: "business",
        element: <BusinessLayout />,
        children: [
          // 工程经济
          { index: true, element: <EngineeringProject /> },
          { path: "contract", element: <EngineeringContract /> },
        ]
      },
    ],
  },
  { path: "*", element: <NoMatch /> },
]

export default routes
