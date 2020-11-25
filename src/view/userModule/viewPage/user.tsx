import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import RenderRoutes from '@src/permission/renderRoutes'
import Title from '../component/title'
import Title2 from '../component/title2'

interface IP {
    history: any,
    route: any
}

interface IS {
    titlemsg: string | number
}

export default class user extends Component<IP, IS> {
    private child: any;

    constructor(props: IP) {
        super(props)
        this.state = {
            titlemsg: ''
        }
    }

    openSub = () => {
        this.props.history.push('/user/subUser')
    }

    // 用于接收子组件的传值方法，参数为子组件传递过来的值
    getDatas(msg: any) {
        //把子组件传递过来的值赋给this.state中的属性
        this.setState({
            titlemsg: msg
        })
    }

    handleCancel = (mag: string | number) => {
        console.log(mag, '父组件的方法被子组件调用了');
    }

    // 父组件调用子组件的函数
    childClick() {
        this.child.onShow('父组件来调用你的方法啦')
    }

    onRef = (ref: any) => {
        this.child = ref
    }

    render() {
        const {route} = this.props
        return (
            <div className="sty1" style={{width: '100%', height: '100%', background: '#fff'}}>
                <p>我是用户页面</p>
                <div style={{margin: '20px 0', background: '#f0f0f0'}}>
                    <p>父子组件互相传值</p>
                    <Title title={'我是用户页面的title'} getdata={this.getDatas.bind(this)}/>
                    <p style={{margin: '10px 0'}}>我是子组件给我传递的值： {this.state.titlemsg}</p>
                </div>
                <div style={{margin: '20px 0', background: '#f0f0f0'}}>
                    <p>父组件和子组件之间相互调用方法</p>
                    <Title2 handleCancel={this.handleCancel} onRef={this.onRef}/>
                    <button onClick={this.childClick.bind(this)}>父组件调用子组件的函数</button>
                </div>
                <NavLink to="/">点击去首页页面</NavLink>
                <div style={{margin: '20px 0'}}/>
                <div style={{margin: '20px 0'}}/>
                <button onClick={this.openSub}>点我展开我的子页面</button>
                <RenderRoutes routes={route.routes}/>
            </div>
        )
    }
}

