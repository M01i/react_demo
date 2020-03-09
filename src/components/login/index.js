import React, { Component } from 'react'
import {login} from '../../api/request'
import './login.scss'
import { Input,Button } from 'antd';
export default class Login extends Component {
    login=()=>{
        let usn = document.querySelector(".login-username").value
        let psd = document.querySelector(".login-password").value
        login(usn,psd).then((res)=>{
            if(res.length>0){
                console.log('login-ok')
                sessionStorage.setItem('username',res[0].username)
                sessionStorage.setItem('id',res[0].id)
                this.props.history.push("/vip")
            }
        })
    }
    reg=()=>{
        this.props.history.push("/reg")
    }
    render() {
        return (
            <div>
                <img src="https://wimg.yunifang.com/images/logo-new.png" className="new-logo" alt='logo'/>
                <div className='login-input-box'>
                    <Input className='login-input login-username' placeholder="请输入用户名" />
                    <Input className='login-input login-password' placeholder="请输入密码" />
                    <Button onClick={this.login}className='login-btn' type="primary">登陆</Button>
                    <Button onClick={this.reg}className='reg-btn' type="primary">没有账号,立即注册</Button>
                </div>
            </div>
        )
    }
}
