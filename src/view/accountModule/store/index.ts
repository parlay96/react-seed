import {observable, action} from 'mobx'
import {setStore, getStore, removeStore} from '@src/utils/storage'
class TestStore2 {
  // 构造器 初始化数据 (如果这样不使用constructor，那么下面得使用@action.bound来改变observables)
  constructor () {
    this.token = getStore({ name: 'token' }) || null
  }
  // 被观察者
  @observable token: string | null

  @action
  SETTOKEN = (val: string) => {
    this.token = val
    setStore({ name: 'token', content: this.token })
  }
  @action
  REMOVETOKEN () {
    this.token = null
    removeStore({name: 'token'})
  }
}
export default new TestStore2()
