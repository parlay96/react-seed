/*
 * @Date: 2022-06-06 10:51:47
 * @Description: file content
 */
import type { CSSProperties, FC } from "react"
import React, {memo} from 'react'
import classNames from "classnames"
import styles from "./index.module.scss"

interface textCellProps {
  /** 内容 */
  children: string | React.ReactNode
  /** 标题 */
  title: string
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 标题样式 */
  titleClassName?: string
}

/**
 * @description 展示文本组件，如： 姓名： pl
 * @Example <TextCell title="工作时间" style={{marginTop: '12px'}}>2020.08.02-2021.07.09</TextCell>
 * @param {textCellProps} props
 * @returns
 */
const TextCell: FC<textCellProps> = memo((props: textCellProps) => {
  /** 解构数据 */
  const {
    children: _pChildren,
    title: _pTitle,
    style: _pStyle,
    titleClassName: _titleClassName,
    className: _pClassName
  } = props

  return (
    <div className={classNames(styles.textCell, _pClassName)} style={_pStyle}>
      <span className={classNames(styles.textCellName, _titleClassName)}>{_pTitle}</span>
      <span className={styles.textCellName}>：</span>
      <div className={styles.textCellContent}>{_pChildren}</div>
    </div>
  )
})

export default TextCell
