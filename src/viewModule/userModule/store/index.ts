import {observable} from 'mobx'
class TestStore2 {
  // 被观察者
  @observable title = '2222'
}
export default new TestStore2()
