import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './footer.scss'
import { HomeOutlined,UserOutlined,CrownOutlined,ShoppingCartOutlined} from '@ant-design/icons'
export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <ul className='footer-nav'>
                    
                    <li> <NavLink to='/home'><HomeOutlined className='footer-icon' /><p>首页</p></NavLink></li>
                    <li> <NavLink to='/vip'><CrownOutlined className='footer-icon' /><p>会员</p></NavLink></li>
                    <li> <NavLink to='/list'><ShoppingCartOutlined className='footer-icon' /><p>购物车</p></NavLink></li>
                    <li> <NavLink to='/mine'><UserOutlined className='footer-icon' /><p>我的</p></NavLink></li>
                </ul>
            </div>
        )
    }
}
