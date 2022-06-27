/*
 * @Date: 2022-05-30 11:52:27
 * @Description:
 */
import * as React from 'react'

export interface INoMatchProps {
  data?: any
}

export default function NoMatch (props: INoMatchProps) {
  return (
    <div>
      <h1>404</h1>
    </div>
  )
}
