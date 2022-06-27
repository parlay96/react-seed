/*
 * @Date: 2022-06-01 15:38:02
 * @Description: Menu布局菜单
 */
import React from 'react'
import type { CSSProperties, ReactNode } from "react"

import { Layout, Menu } from 'antd'

import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'

import { Icon } from '@/components'

import styles from './index.module.scss'

const { Sider } = Layout
interface IMenuProps {
  /** 菜单子节点 */
  children: ReactNode
  /** 菜单的list */
  menuList: {title?: string, key: string, label?: ReactNode}[]
  /** 默认选中 */
  defaultSelectedKeys?: string[]
  /**  默认展开 */
  defaultOpenKeys?: string[]
  /** 自定义内容区的样式 */
  style?: CSSProperties
  /** 自定义内容区的类样式 */
  className?: string,
  /** 是否显示顶部的线条 */
  showLineTop?: boolean
  /** 点击选项 */
  onClick?: (e) => void
}

const MenuLayout = (props: IMenuProps) => {
  const {
    menuList: _menuList,
    defaultSelectedKeys,
    defaultOpenKeys,
    showLineTop,
    style: _pStyle,
    onClick,
    className: _pClassName
  } = props

  const selectedKeys = defaultSelectedKeys?.length ? defaultSelectedKeys : []
  const openKeys = defaultOpenKeys?.length ? defaultOpenKeys : []

  const navigate = useNavigate()

  const menuClick = ({key}) => {
    navigate(key)
    onClick?.(key)
  }

  const ExpandIcon = (props) => {
    const { isOpen } = props
    return <Icon type="yp-down-fill" className={classNames(!isOpen ? styles.hideExpandIcon : '', styles.expandIcon)} size={10}/>
  }

  return (
    <Layout className={classNames(styles.menuLayout, showLineTop ? styles.lineTop : '')}>
      <Sider width={200} className={styles.siteLayout}>
        <Menu
          mode="inline"
          onClick={menuClick}
          expandIcon={ExpandIcon}
          defaultSelectedKeys={selectedKeys}
          defaultOpenKeys={openKeys}
          style={{ height: '100%', borderRight: 0 }}
          items={_menuList}
        />
      </Sider>
      <Layout className={classNames(_pClassName, styles.childrenLayout)} style={_pStyle}>
        {props.children}
      </Layout>
    </Layout>
  )
}

MenuLayout.defaultProps = {
  showLineTop: true
}

export default MenuLayout
