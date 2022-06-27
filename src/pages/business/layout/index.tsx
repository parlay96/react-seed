/*
 * @Date: 2022-06-01 16:48:08
 * @Description: 业务模块layout
 */
import React from "react"
import { Outlet, useLocation } from 'react-router-dom'
import { getTreePathKey } from '@/utils'
import { menuList } from '@/config'
import { MenuRender } from '@/components'
import styles from './index.module.scss'

/** 业务模块layout */
const businessLayout = () => {
  const { pathname } = useLocation()
  // 根据子节点的key路径--获取父节点的key, 然后展开父节点
  const menuPath = getTreePathKey(menuList, pathname, {childrenKey: 'children', parentKey: 'key', toNumber: false})
  // 处理默认展开
  let defaultOpenKeys = []
  if (menuPath.length > 1) {
    defaultOpenKeys = [menuPath[0].key]
  }
  return (
    <div className={styles.business}>
      <MenuRender
        menuList={menuList}
        defaultSelectedKeys={[pathname]}
        defaultOpenKeys={defaultOpenKeys}
        style={{backgroundColor: '#fff'}}>
        <React.Suspense fallback="loading...">
          <Outlet/>
        </React.Suspense>
      </MenuRender>
    </div>
  )
}

export default businessLayout
