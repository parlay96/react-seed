import React from 'react'
import type { ReactNode } from "react"

interface Props {
    /** 是否渲染 */
    visible: boolean | any
    /** 子元素 */
    children: ReactNode
}

/** 判断元素是否显示 */
const Visible = ({ visible, children }: Props) => {
  return <>{!!visible && children}</>
}

export default Visible
