import React,{Component} from 'react'
import Loadable from 'react-loadable'
var Home=Loadable({  //异步加载组件
    loader:()=>import("../components/home"),
    loading:()=><div>loading.....</div>
})
var Footer=Loadable({  //异步加载组件
    loader:()=>import("../components/footer"),
    loading:()=><div>loading.....</div>
})
var Header=Loadable({  //异步加载组件
    loader:()=>import("../components/header"),
    loading:()=><div>loading.....</div>
})
var NotFound=Loadable({  //异步加载组件
    loader:()=>import("../components/notfound"),
    loading:()=><div>loading.....</div>
})

export const routes =[
    {
        path:'/home',
        component:Home
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/404',
        component:NotFound
    }
]

// export const subRoutes =[
//     {
//         path:'/home/dashboard',
//         component:DashBoard,
//         roles:["admin","abc"]
//     },
// ]