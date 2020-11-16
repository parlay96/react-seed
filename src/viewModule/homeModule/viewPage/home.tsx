import React, { Component } from 'react'
import services from '../services/index'
import {NavLink} from "react-router-dom";
import { inject, observer } from "mobx-react";
import { Table } from 'antd';
import '../themes/home.scss'
interface homeProps { storesIndex: any; userModules: any;}
@inject('storesIndex', 'userModules')
@observer
export default class home extends Component<homeProps, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      name: '12333'
    }
  }
  componentDidMount () {
    services.Login(111).then((data: any) => {
      console.log(data)
    })
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
      title: '姓名',
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
    const { storesIndex, userModules } = this.props;
    return (
      <div className="homeBox">
        <Table dataSource={dataSource} columns={columns} />
        <span style={{ color: 'red', fontSize: '40px' }}>我是{storesIndex.name} 今年{storesIndex.age}岁</span>
        <br/>
        {userModules.title}
        <button onClick={this.activateLasers}>点击我</button>
        <NavLink to='/user'>点击去用户页面</NavLink>
        <input/>
    <p>{this.state.name}</p>
      </div>
    )
  }
}
