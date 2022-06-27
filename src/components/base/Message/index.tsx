/*
 * @Author: pengLei
 * @LastEditors: Please set LastEditors
 * @Date: 2021-11-17 14:50:44
 */
import { Icon } from "@/components"
import newInstance, { NotificationInstance } from "./Message"

export type NoticeType = "info" | "success" | "error" | "warning"
type ConfigContent = React.ReactNode
type JointContent = ConfigContent | ArgsProps
export type ConfigOnClose = () => void

export interface ArgsProps {
  /** 消息内容 */
  content: React.ReactNode
  /** 自动关闭的延时，单位秒。设为 0 时不自动关闭 */
  duration?: number
  /** 消息类型 */
  type: NoticeType
  /** 自定义图标 */
  icon?: React.ReactNode
  /** 当前提示的唯一标志 */
  key?: string | number
  /** 自定义内联样式 */
  style?: React.CSSProperties
  /** 自定义 CSS class */
  className?: string
  /** 关闭时触发的回调函数 */
  onClose?: () => void
  /** 点击 message 时触发的回调函数 */
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}
export interface MessageType extends PromiseLike<any> {
  (): void
}
export interface MessageApi {
  info(content: JointContent, duration?: number, onClose?: ConfigOnClose): MessageType
  success(content: JointContent, duration?: number, onClose?: ConfigOnClose): MessageType
  error(content: JointContent, duration?: number, onClose?: ConfigOnClose): MessageType
  warning(content: JointContent, duration?: number, onClose?: ConfigOnClose): MessageType
  open(args: ArgsProps): MessageType
  destroy(messageKey?: React.Key): void
}

/** 消息容器方法实例 */
let messageInstance: NotificationInstance | null
let key = 1
/** 默认时长 */
let defaultDuration = 3

/** 类型图标 */
const typeToIcon = {
  info: () => <Icon type={"yp-a-bianzu20"} size={16} color="#ff9800" />,
  success: () => <Icon type={"yp-zhifugouxuan"} size={16} color="#46db7a" />,
  error: () => <Icon type={"yp-icon_cuowu"} size={16} color="#f74742" />,
  warning: () => <Icon type={"yp-a-bianzu20"} size={16} color="#ff9800" />,
}

/** 唯一key值 */
export function getKeyThenIncreaseKey() {
  return key++
}

/** 判断参数是否为一个对象，且存在content */
function isArgsProps(content: JointContent): content is ArgsProps {
  return Object.prototype.toString.call(content) === "[object Object]" && !!(content as ArgsProps).content
}

/** 获取消息组件实例 */
function getRCNotificationInstance(args: ArgsProps, callback: (info: { instance: NotificationInstance }) => void) {
  /** 防止重复构建外层容器 */
  if (messageInstance) {
    callback({ instance: messageInstance })
    return
  }
  /** 消息组件全局基础配置 */
  const instanceConfig = {maxCount: 1}
  newInstance(instanceConfig, (instance: any) => {
    if (messageInstance) {
      callback({ instance: messageInstance })
      return
    }
    messageInstance = instance
    callback({ instance })
  })
}

/** 组装通知的参数 */
function getRCNoticeProps(args: ArgsProps): any {
  const duration = args.duration !== undefined ? args.duration : defaultDuration
  const IconComponent = typeToIcon[args.type]
  return {
    key: args.key,
    duration,
    style: args.style || {},
    className: args.className,
    icon: args.icon || (IconComponent && <IconComponent />),
    content: args.content,
    onClose: args.onClose,
    onClick: args.onClick,
  }
}

/** 消息创建器 */
function notice(args: ArgsProps): any {
  const target = args.key || getKeyThenIncreaseKey()
  const callback = () => {
    if (typeof args.onClose === "function") {
      args.onClose()
    }
  }
  getRCNotificationInstance(args, ({ instance }) => {
    instance.notice(getRCNoticeProps({ ...args, key: target, onClose: callback }))
  })
}

/** 暴露方法 */
const api: any = {
  open: notice,
  destroy: (messageKey?: React.Key) => {
    if (messageInstance) {
      if (messageKey) {
        const { removeNotice } = messageInstance
        removeNotice(messageKey)
      } else {
        const { destroy } = messageInstance
        destroy()
        messageInstance = null
      }
    }
  },
}

/** 添加消息类型 */
export function attachTypeApi(originalApi: MessageApi, type: NoticeType) {
  originalApi[type] = (content: JointContent, duration?: number, onClose?: ConfigOnClose) => {
    if (isArgsProps(content)) {
      return originalApi.open({ ...content, type })
    }
    return originalApi.open({ content, duration, type, onClose })
  }
}

;(["success", "info", "warning", "error"] as NoticeType[]).forEach(type => attachTypeApi(api, type))

export default api as MessageApi
