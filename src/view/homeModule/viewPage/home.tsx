import React from 'react'
import services from '../services'
import { inject, observer } from 'mobx-react'
import RenderRoutes from '@src/permission/renderRoutes'
import { Table } from 'antd'
import '../themes/home.scss'
import Header from '../component/Header'
import {Test} from '../component/Test';

interface homeProps { storesIndex: any; userModules: any; history: any, route: any}
interface IS {name: string, date: any}

@inject('storesIndex', 'userModules')
@observer
export default class Home extends React.Component<homeProps, IS> {
  static title = '哇哈哈哈'
  readonly name: string | number = 212121
  private timerID: any = null
  constructor(props: homeProps) {
    super(props)
    this.state = {
      name: '12333',
      date: new Date()
    }
  }
  // 组件渲染之后调用，只调用一次。可以在此请求数据
  componentDidMount () {
    // console.log(renderRoutes)
    console.log('静态属性', Home.title) // 静态属性 不可this.title调用
    console.log('只读属性', this.name) // 只读属性
    services.Login().then((data: any) => {
      console.log(data)
    })
    // // this.timerID私有属性
    // this.timerID = setInterval(
    //   () => this.tick(),
    //   1000
    // );
  }
  // 组件将要卸载时调用，一些事件监听和定时器需要在此时清除
  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  openSub = () => {
    this.props.history.push('/subInfo')
  }
  openuser = () => {
    this.props.history.push('/user')
  }

  activateLasers = () => {
    this.props.storesIndex.changeAge(1)
    this.setState({
      name: '哈哈哈哈'
    })
  }
  render () {
    const dataSource = [
     {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }]
    const columns = [
     {
      title: 'antd 表格组件',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    }]
    const { storesIndex, userModules, route } = this.props
    return (
      <div className="homeBox">
        <Header title={'我是头部哦'}/>
        <Test />
        <Table dataSource={dataSource} columns={columns} />
        <br/>
        <span style={{ color: 'red', fontSize: '40px' }}>我是{storesIndex.name} 今年{storesIndex.age}岁</span>
        <br/>
        {userModules.title}
        <br/>
        <button onClick={this.activateLasers}>点击我</button>
        <p style={{padding: '20px 0'}}><input/></p>
        <p>{this.state.name}</p>
        <h2>时间： {this.state.date.toLocaleTimeString()}</h2>
        <button onClick={this.openSub}>点我展开我的子页面</button>
        <p style={{padding: '20px 0'}}>
          <button onClick={this.openuser}>点击去用户页面</button>
        </p>
        <RenderRoutes routes={route.routes}/>
      </div>
    )
  }
}
