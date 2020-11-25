import React from 'react'
import { inject, observer } from 'mobx-react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../themes/index.scss'

interface IS {SETTOKEN: any, location: any, history: any}

@inject(({ accountModule }: any) => ({
    SETTOKEN: accountModule.SETTOKEN
}))
@observer
export default class loginIndex extends React.Component<IS> {
    constructor(props: any) {
        super(props)
        this.state = {
        }
    }
    // 组件渲染之后调用，只调用一次。可以在此请求数据
    componentDidMount () {
    }
    onFinish = (values: any) => {
        if (values.password) {
            this.props.SETTOKEN('123456')
            const { from } = this.props.location.state || { from: { pathname: '/' } }
            // 去之前过来的页面，或者首页
            this.props.history.push(from.pathname)
        }
    }
    render () {
        const { } = this.props
        return (
            <div className="loginBox">
                <div className="FormBox">
                    <Form
                        name="normal_login"
                        className="login-form"
                        onFinish={this.onFinish}
                    >
                        <Form.Item name="username" rules={[{ required: true, message: '请输入用户名!' }]}>
                            <Input prefix={<UserOutlined className="site-form-item-icon" />}
                                   placeholder="请输入用户名" />
                        </Form.Item>
                        <Form.Item name="password" rules={[{ required: true, message: '请输入用户名密码!' }]}>
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="请输入密码"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                               登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}
