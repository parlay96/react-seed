/*
 * @Author: pengLei
 * @LastEditors: Please set LastEditors
 */
import type { CSSProperties } from "react"
import classNames from "classnames"
import ReactDOM from "react-dom"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import React, { forwardRef, useImperativeHandle, useState, createRef } from "react"
import { Notice, NoticeProps } from "./Notice"
import styles from "./index.module.scss"

/** Message参数 */
export interface MessageProps {
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: CSSProperties
  /** 最大数量 */
  maxCount?: number
}
export interface NoticeContent extends Omit<NoticeProps, 'children' | 'noticeKey' | 'onClose'> {
  key: React.Key
  content?: React.ReactNode
  onClose?: () => void
}
/** 消息方法类型 */
export interface NotificationInstance {
  notice: (props: any) => void
  removeNotice: (key: React.Key) => void
  destroy: () => void
}

type NewInstance = (
  properties: MessageProps & { getContainer?: () => HTMLElement },
  callback: (instance: NotificationInstance) => void
) => void

type Ref = {
  add: (props: any) => void,
  remove: (props: any) => void,
}

/** 消息组件 */
const Message = forwardRef<Ref, MessageProps>((props, ref) => {
  const { style, className: _pClassName, maxCount } = props
  /** 消息收集 */
  const [notices, setNotices] = useState<NoticeProps[]>([])
  /** 删除通知 */
  const remove = (removeKey: React.Key) => {
    setNotices((prevNotices) => (prevNotices.filter(({ noticeKey }) => noticeKey !== removeKey)))
  }
  /** 添加通知 */
  const add = (originNotice: NoticeContent) => {
    let updatedNotices = notices.concat()
    const noticeProps = {
      ...originNotice,
      noticeKey: originNotice.key,
      onClose: (noticeKey: React.Key) => {
        remove(noticeKey)
        originNotice.onClose?.()
      },
      onClick: originNotice.onClick,
      children: originNotice.content
    }
    /** 最大数量 */
    if (maxCount && notices.length >= maxCount) {
       updatedNotices = []
    }
    updatedNotices.push(noticeProps)
    setNotices(updatedNotices)
  }
  /** 暴露方法 */
  useImperativeHandle(ref, () => ({
    add,
    remove
  }))

  return (
    <div style={style} className={classNames(styles.ypMessage, _pClassName)}>
      <TransitionGroup>
        {notices?.map(item => (
          <CSSTransition
            appear
            key={item.noticeKey}
            timeout={200}
            classNames={{
              enter: styles.ypMessageEnter,
              enterActive: styles.ypMessageEnterActive,
              exit: styles.ypMessageExit,
              exitActive: styles.ypMessageExitActive
            }}
          >
            <Notice {...item} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  )
})

/** 创建消息通知到页面 */
const newInstance: NewInstance = (properties, callback) => {
  /** 解析Message外层相关配置信息 */
  const { getContainer, ...props } = properties || {}
  /** 创建外层容器 */
  const container = document.createElement('div')
  /** 是否存在容器？ */
  if (getContainer) {
    const root = getContainer()
    root.appendChild(container)
  } else {
    document.body.appendChild(container)
  }
  const ref = createRef<Ref>()
  /** 动态添加消息节点到容器 */
  ReactDOM.render(<Message {...props} ref={ref} />, container)
  callback({
    notice: (noticeProps: any) => {
      ref.current?.add(noticeProps)
    },
    removeNotice(key) {
      ref.current?.remove(key)
    },
    destroy() {
      ReactDOM.unmountComponentAtNode(container)
      if (container.parentNode) {
        container.parentNode.removeChild(container)
      }
    }
  })
}

export default newInstance
