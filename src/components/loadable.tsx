import React from "react";
import Loadable from "react-loadable";
const loadingComponent = () => {
    return <div>Loading...</div>;
};

// 按需加载
export default (loader: any) => {
    return Loadable({
        loader,
        loading: loadingComponent,
    });
};
