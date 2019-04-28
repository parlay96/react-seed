import React from "react";
import apiUrl from '../../../../apiUrl/index'
let $http = (React as any).http
export default {
  Login (parame: any) {
    return $http.get(apiUrl.customerList).then((data: any) => {
      return data
    })
  }
}
