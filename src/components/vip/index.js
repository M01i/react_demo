import React, { Component } from 'react'
import {Redirect} from 'react-router-dom' 
import './vip.scss'
export default class VIP extends Component {
    render() {
        return (
            sessionStorage.getItem("username")?<div className='vip'>
                <p>您已成功登录</p>
                <p>欢迎您,尊贵的VIP {sessionStorage.getItem('username')}</p>
                <p>真不知道编点什么了...毕竟我不是他们高贵的会员。。。</p>
            </div>:<Redirect to="/login" exact />
        )
    }
}
