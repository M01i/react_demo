import React, { Component } from 'react'
import {SearchOutlined} from '@ant-design/icons'
import './header.scss'
import { Input } from 'antd';
export default class Header extends Component {
    found=()=>{
        console.log(1)
    }
    render() {
        return (
            <div className='header'>
                <Input className='search-input' onClick={this.found} placeholder="请输入商家或商品信息" prefix={<SearchOutlined className='search-icon'/>} />
                
            </div>
        )
    }
}
