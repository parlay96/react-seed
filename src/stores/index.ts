import {observable, action} from 'mobx'

class TestStore {
  @observable name: any
  @observable age: any
  @observable keepAliveData: any // 需要缓存的页面的名称
  // 构造器 初始化数据
  constructor() {
    this.name = '彭垒'
    this.age = 18
    this.keepAliveData = ['home']
  }
  @action
  changeAge = (i: any) => {
    this.age = this.age + Number(i)
  }
  // 设置需要缓存的页面
  SETKEEPALIVEDATA = (data: any) => {
    const dataSource = [...this.keepAliveData, ...data]
    const dataSource2 = dataSource.filter(function(element,index,self){
       return self.indexOf(element) === index
    })
    this.keepAliveData = [...dataSource2]
  }
  // 删除需要缓存的页面
  REMOVEKEEPALIVEDATA (data: any) {
    let kaData = JSON.parse(JSON.stringify(this.keepAliveData))
    const Fun = (arr: any, val: any) => {
      return arr.filter((item: any) => item !== val)
    }
    if (data.length > 0) {
      data.forEach((it: any) => {
        kaData = Fun(kaData, it)
      })
    }
    this.keepAliveData = JSON.parse(JSON.stringify(kaData))
  }
}
export default new TestStore()
