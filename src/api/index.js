import axios from 'axios';

var service = axios.create({
    // baseURL:"/ynf",  //所有的请求都会 带上 /mt
    // "content-type":"application/json",
    
    timeout:5000
})
//请求拦截器
// service.interceptors.request.use((config)=>{
//     return config;
// })
//响应拦截器
service.interceptors.response.use((res)=>{
    return res.data
})

export default service;