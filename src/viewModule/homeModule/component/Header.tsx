import React, { useState, useEffect } from 'react';

interface IP {title: string}

// hooks
export default function Header (props: IP) {
    // 声明一个叫 "count" 的 state 变量
    // setbgColor就是去改变bgColor的值, 不可以直接bgColor=“red” // 是没效果的
    const [bgColor, setbgColor] = useState('#fff');
    const [countObj, setcountObj] = useState({name: '彭垒', nums: 0});

    const list: number[] = [];
    const [countNums, setcountNums] = useState(list);

    // 枚举
    enum Color {num=1, num2, num3}

    // 接收父组件的传值
    const { title } = props;

    const bgColorChange = () => {
        // 改变基本数据类型
        setbgColor('red')
        // 改变对象
        countObj.name = '彭垒66666'
        countObj.nums++
        setcountObj(countObj)
        // 改变数组
        countNums.push(2 + countObj.nums)
        // 不推荐这样的方式去改变。会感觉页面刷新慢！
        // setcountNums(countNums)
        // 改变数组推荐这样处理
        setcountNums([...countNums])
    }
    // 副作用钩子
    useEffect(() => {
        // 获取枚举的值
        console.log(Color.num, Color[2])
    }, [bgColor, countObj, countNums]); // 仅在 bgColor countObj countNums更改时更新 // 空数组代表无论什么情况下该函数都不会发生改变,并且随父组件改变！

    return (
        <div className={'width100'} style={{marginBottom: '20px'}}>
            <p style={{ padding: '20px', background: bgColor }}>{ title } {countObj.name}</p>
            {
                countNums.map((item, index) => {
                    // 错误做法，在react中不要使用索引值作为遍历节点的key  key != index
                    // return <span key={key}>{item}</span>
                    // 正确做法
                    return <span style={{marginLeft: '10px'}} key={item + 1}>{item}</span>
                })
            }
            <button onClick={bgColorChange}>点我改变头部背景色</button>
        </div>
    );
}
