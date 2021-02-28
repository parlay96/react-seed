import React, {useState, useCallback} from 'react';

interface Demo1Props {
    testCallback: (num: number) => void
}

export const Demo1: React.FC<Demo1Props> = (props) => {
    const [num, setNum] = useState(11);
    const { testCallback } = props;
    const hanleCallback = useCallback(() => {
        testCallback(3333)
    }, [testCallback]);

    return (
        <div onClick={hanleCallback}>
            {num}
        </div>
    )

}
