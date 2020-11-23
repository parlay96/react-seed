import {httpInstance} from '@src/config'
import apiUrl from '@src/apiUrl'
const $http = httpInstance
export default {
  Login (par?: any) {
    return $http.get(apiUrl.customerList).then((data: any) => {
      return data
    })
  }
}
