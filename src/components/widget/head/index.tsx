/*
 * @Author: pl
 * @Date: 2022-05-31 17:02:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-27 10:45:22
 * @Description: 头部导航
 * @FilePath: \yp-pc\src\pages\workbench\components\head\index.tsx
 */
import React, { memo, useEffect } from 'react'
import classNames from 'classnames'
import { useLocation, useNavigate } from 'react-router-dom'
import { Icon } from "@/components"
import { navList } from "@/config"
import styles from './index.module.scss'

const Head = memo(() => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  // 点击tab
  const navClick = (url: string) => {
    navigate(url)
  }

  // 匹配url
  const matchActive = () => {
    const paths = pathname.split('/')?.filter(item => item)
    const acviveIndex = paths.length == 0 && pathname == '/' ?
      0
      : navList.findIndex(item => item.matchUrl == `/${paths[0]}`)
    return acviveIndex
  }
  return (
    <div className={styles.headBox}>
      <div className={classNames(styles.navBox, 'unselectable')}>
        <div className={styles.logo}>
        </div>
        <div className={styles.navGroup}>
          {navList?.map((item, _index) =>
            <div className={styles.navItem}
              onClick={() => navClick(item.url)}
              key={`nav-item-${_index}`}>
              <div className={classNames(matchActive() == _index ? styles.navItemLine : '')}>
                <span>{ item.name }</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={classNames(styles.navOther, 'unselectable')}>
        <div className={classNames(styles.navItem, styles.otherItem)}>
          <Icon type="yp-kefu1" size={16}/>
          <span className={styles.text}>客服</span>
        </div>
        <div className={classNames(styles.navItem, styles.otherItem)}>
          <Icon type="yp-bangzhu" size={16}/>
          <span className={styles.text}>帮助</span>
        </div>
      </div>
    </div>
  )
})

export default Head
