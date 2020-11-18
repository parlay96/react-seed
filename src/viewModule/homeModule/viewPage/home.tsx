import React from 'react'
import services from '../services/index'
import {NavLink, Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import renderRoutes from "../../../permission/renderRoutes";
import { Table } from 'antd';
import '../themes/home.scss'
import Header from '../component/Header'

interface homeProps { storesIndex: any; userModules: any; history: any, route: any}
interface IS {name: string, date: any}

@inject('storesIndex', 'userModules')
@observer
export default class home extends React.Component<homeProps, IS> {
  private timerID: any = null
  static title: string = '哇哈哈哈'
  readonly name: string | number = 212121
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
    console.log('静态属性', home.title) // 静态属性 不可this.title调用
    console.log('只读属性', this.name) // 只读属性
    services.Login(111).then((data: any) => {
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
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  openSub = () => {
    console.log(this.props)
  }

  activateLasers = () => {
    this.props.storesIndex.changeAge(1)
    this.props.storesIndex.SETKEEPALIVEDATA(['user'])
    this.setState({
      name: '哈哈哈哈'
    })
  }
  render () {
    const dataSource = [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }];
    const columns = [{
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
    }];
    const { storesIndex, userModules, route } = this.props;
    console.log(route.routes)
    return (
      <div className="homeBox">
        <Header title={'我是头部哦'}/>
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
          <NavLink to='/user'>点击去用户页面</NavLink>
        </p>
        {renderRoutes(route.routes)}
      </div>
    )
  }
}
