/*
 * @Author: pengLei
 * @LastEditors: pl
 * @Date: 2021-11-03 14:33:23
 * @LastEditTime: 2022-05-31 20:00:21
 * @motto: Still water run deep
 * @Description: Modify here please
 * @FilePath: \yp-pc\src\components\base\Icon\index.tsx
 */
import React from 'react'

interface IconProps {
  /** icon字体名称 */
  type: string
  /** 图标大小 设置的font-size */
  size?: number
  /** 图标样式 */
  style?: React.CSSProperties
  /** transform */
  rotate?: number
  /** 颜色 */
  color?: string
  /** 类名 */
  className?: string
  /** 事件 */
  onClick?: (param?: any) => void
  [key: string]: any
}

/** Icon */
const Icon = (props: IconProps) => {
  /** 解构数据 */
  const {
    type: _pType,
    size: _pSize,
    color: _pColor,
    rotate: _pRotate,
    style: _pStyle,
    className: _pClassName,
    onClick,
  } = props

  const svgStyle = _pRotate ? { transform: "rotate(" + _pRotate + "deg)" } : undefined

  const style = { ..._pStyle, ...svgStyle, fontSize: _pSize + "px", color: _pColor }

  return <span className={`yp-font-icon ${_pType} ${_pClassName || ""}`} {...{ style, onClick }} />
}

Icon.defaultProps = {
  size: 14,
}

export default Icon
