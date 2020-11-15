import {observable} from 'mobx';
class TestStore {
  // 被观察者
  @observable name = '首页';
}
export default new TestStore()
