import React, { Component } from 'react'

interface IP {
  handleCancel: (val: string | number) => void,
  onRef: (val: any) => void
}

export default class title2 extends Component<IP> {
    constructor(props: any) {
        super(props)
        this.state = {
            title: '我是输入框的默认值'
        }
        if(props.onRef){ // 如果父组件传来该方法 则调用方法将子组件this指针传过去
            props.onRef(this)
        }
    }
    onShow(msg: any) {
        console.log('子组件的方法被父组件调用', msg)
    }

    render() {
        return (
            <div style={{padding: '15px 0'}}>
                <button onClick={() => { this.props.handleCancel('子组件调用') }}>子组件用this.props调用父组件的函数</button>
            </div>
        )
    }
}

