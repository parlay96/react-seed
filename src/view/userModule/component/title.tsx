import React, { Component } from 'react'
import { Input } from 'antd'

interface IP {title: string, getdata: (val : string | number) => void}
interface IS {inputValue: string}

export default class title extends Component<IP, IS> {
    constructor(props: IP) {
        super(props)
        this.state = {
            inputValue: '我是输入框的默认值'
        }
    }
    componentDidMount () {
        // 传值给父组件
        this.props.getdata(this.state.inputValue)
    }
    //输入框事件，用于为this.state赋值
    handleChange(e: any){
        this.setState({
            inputValue: e.target.value
        });
        // 传值给父组件
        this.props.getdata(e.target.value)
    }
    render() {
        const {title} = this.props
        const {inputValue} = this.state
        return (
            <div style={{padding: '15px 0'}}>
                <div style={{margin: '20px 0'}}>
                    <p>我是父组件给我的值：{title}</p>
                </div>
                <Input placeholder="请你输入内容"
                       style={{width: '50%'}}
                       onChange={this.handleChange.bind(this)}
                       value={inputValue}/>
            </div>
        )
    }
}

