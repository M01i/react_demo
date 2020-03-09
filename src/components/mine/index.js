import React, { Component } from 'react'
import './mine.scss'
import {withRouter} from 'react-router-dom' 
import {GiftTwoTone,RightOutlined} from '@ant-design/icons'
@withRouter
 class Mine extends Component {
    logout=()=>{
        sessionStorage.clear();
        this.props.history.push('/home')
    }
    render() {
        return (
            <div className='user-box'>
                <div className='user-info'>
                    <div className='user-title'>
                        <img className='user-head' alt='user' src="https://wimg.yunifang.com/images/login_no.png" />
                        <span>{sessionStorage.getItem('username')?'欢迎您，'+sessionStorage.getItem('username'):'未登录'}</span>
                    </div>
                    <div className='nice-box'>
                        <div>
                            <span>0张</span>
                            <span>卡卷</span>
                        </div>
                        <div>
                            <span>0元</span>
                            <span>分享金</span>
                        </div>
                        <div>
                            <span>0分</span>
                            <span>U币</span>
                        </div>
                    </div>
                </div>
                <div className='info-box'>
                    <div className='one-info'>
                    <span className='info-title'>
                        <GiftTwoTone twoToneColor="#eb2f96" />
                        <span>全部订单</span>
                    </span>
                    <RightOutlined />
                    </div>
                </div>
                <div className='mine-thing'>
                    <div className='one-info'>
                        <span className='info-title'>
                            <GiftTwoTone twoToneColor="#eb2f96" />
                            <span>我的帖子</span>
                        </span>
                        <RightOutlined />
                    </div>
                    <div className='one-info'>
                        <span className='info-title'>
                            <GiftTwoTone twoToneColor="#eb2f96" />
                            <span>我的团购商品</span>
                        </span>
                        <RightOutlined />
                    </div>
                    <div className='one-info'>
                        <span className='info-title'>
                            <GiftTwoTone twoToneColor="#eb2f96" />
                            <span>我的抽奖单</span>
                        </span>
                        <RightOutlined />
                    </div>
                    <div className='one-info'>
                        <span className='info-title'>
                            <GiftTwoTone twoToneColor="#eb2f96" />
                            <span>邀请有礼</span>
                        </span>
                        <RightOutlined />
                    </div>
                    <div className='one-info'>
                        <span className='info-title'>
                            <GiftTwoTone twoToneColor="#eb2f96" />
                            <span>兑换转区</span>
                        </span>
                        <RightOutlined />
                    </div>
                    <div className='one-info'>
                        <span className='info-title'>
                            <GiftTwoTone twoToneColor="#eb2f96" />
                            <span>真伪查询</span>
                        </span>
                        <RightOutlined />
                    </div>
                    <div className='one-info' onClick={this.logout}>
                        <span className='info-title'>
                            <GiftTwoTone twoToneColor="#eb2f96" />
                            <span>退出</span>
                        </span>
                        <RightOutlined />
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Mine