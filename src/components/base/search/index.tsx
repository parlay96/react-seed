/*
 * @Date: 2022-06-08 14:29:49
 * @Description: file content
 */
import React from 'react'
import classNames from "classnames"
import { Input } from 'antd'
import { Icon  } from '@/components'
import type { CSSProperties } from "react"
import styles from './index.module.scss'

interface Props {
  value?: string | number
  placeholder?: string
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
}

/** 搜索框 */
const Search = (props: Props) => {

  /** 解构数据 */
  const {
    value: _value,
    placeholder: placeholder,
    style: _pStyle,
    className: _pClassName
  } = props

  return (
    <>
      <div className={classNames(styles.ypSearch, _pClassName)} style={_pStyle}>
        <Input placeholder={placeholder} prefix={<Icon type="yp-search" size={16} color="#D8D8D8" />} value={_value}/>
      </div>
    </>
  )
}

Search.defaultProps = {
  style: {
    width: '240px'
  }
}

export default Search
