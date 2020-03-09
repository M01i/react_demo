import React, { Component } from 'react'
import {reg,reg_T} from '../../api/request'
import './reg.scss'
import { Input,Button } from 'antd';
export default class Login extends Component {
    regs=()=>{
        let usn = document.querySelector(".login-username").value
        let psd = document.querySelector(".login-password").value
        reg_T(usn,psd).then((res)=>{
            if(res.length>0){
                console.log('账号已存在')
                return
            }
            reg(usn,psd).then((res)=>{
                    console.log(res)
                    sessionStorage.setItem("username",usn)
                    this.props.history.push("/")
                    // this.props.history.go(-2)
          
            })
        })
    }
    render() {
        return (
            <div>
                <img src="https://wimg.yunifang.com/images/logo-new.png" className="new-logo" alt='logo'/>
                <div className='login-input-box'>
                    <Input className='login-input login-username' placeholder="请输入用户名" />
                    <Input className='login-input login-password' placeholder="请输入密码" />
                    <Button onClick={this.regs}className='reg-btn' type="primary">注册</Button>
                </div>
            </div>
        )
    }
}
