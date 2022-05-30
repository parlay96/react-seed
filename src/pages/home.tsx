/*
 * @Author: penglei
 * @Date: 2022-05-26 12:53:12
 * @LastEditors: pl
 * @LastEditTime: 2022-05-28 17:11:15
 * @Description:
 */
import React, { useEffect } from "react"
import stylesCss from './index.module.scss'

interface ExampleDemoProps {
  data?: any[]
}

const Home = (props: ExampleDemoProps) => {
  const { data } = props

  useEffect(() => {
    console.log(12223)
  }, [])

  return (
    <>
      <div className={stylesCss.bos}>
       sad大大大萨达手打
      </div>
    </>
  )
}

export default Home
