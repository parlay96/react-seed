import React, {useState} from 'react';
// import { useRequest } from 'ahooks';
import {Demo1} from './Demo1';

export const Test: React.FC<{}> = () => {
    const [num, setNum] = useState(0)
    const testCallback =(params: number) => {
        setNum(params)
    };

    return (
        <div>
            {num}
            <Demo1 testCallback={testCallback} />
        </div>
    )
}
