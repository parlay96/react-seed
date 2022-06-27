/*
 * @Author: pengLei
 * @LastEditors: Please set LastEditors
 * @Date: 2021-11-18 10:43:19
 * @LastEditTime: 2022-06-27 10:18:40
 */
import type { FC, ReactNode } from "react"
import classNames from "classnames"
import { useEffect, useRef } from 'react'
import styles from "./index.module.scss"

export interface NoticeProps {
    /** 自定义 CSS class */
    className: string,
    /** 自定义样式 */
    style?: React.CSSProperties
    /** 自动关闭的延时，单位秒。设为 0 时不自动关闭 */
    duration?: number | null
    /** 子节点 */
    children?: ReactNode
    /** 自定义图标 */
    icon: ReactNode
    /** 唯一key值 */
    noticeKey: React.Key
    /** 回调 */
    onClick?: React.MouseEventHandler<HTMLDivElement>
    /** 关闭回调 */
    onClose?: (key: React.Key) => void
}

/** 通知文本组件 */
export const Notice: FC<NoticeProps> = (props) => {
    const {
        children,
        icon: _pIcon,
        duration,
        noticeKey,
        style,
        className: _pClassName,
        onClose,
        onClick
    } = props
    const mounting = useRef<boolean>(true)
    const checkTimeoutRef = useRef<number>()
    /** 关闭时 */
    const close = (e?: React.MouseEvent<HTMLAnchorElement>) => {
        if (e) {
            e.stopPropagation()
        }
        clearCloseTimer()
        if (onClose) {
            onClose(noticeKey)
        }
    }
    /** 启动时 */
    const startCloseTimer = () => {
        if (duration) {
            checkTimeoutRef.current = window.setTimeout(() => {
                close()
            }, duration * 1000)
        }
    }
    /** 清除定时器 */
    const clearCloseTimer = () => {
        if (checkTimeoutRef.current) {
            clearTimeout(checkTimeoutRef.current)
        }
    }
    /** 刷新时 */
    const restartCloseTimer = () => {
        clearCloseTimer()
        startCloseTimer()
    }

    useEffect(() => {
        if (mounting.current) {
            mounting.current = false
            startCloseTimer()
            return
        }
        restartCloseTimer()
        return () => {
            clearCloseTimer()
        }
    }, [duration])

    return (
        <div
            style={style}
            className={classNames(styles.ypMessageNotice, _pClassName)}
            onClick={onClick}>
            <div className={styles.ypMessageNoticeContent}>
                <span className={styles.typeIcon}>{_pIcon}</span>
                <span>{children}</span>
            </div>
        </div>
    )
}
